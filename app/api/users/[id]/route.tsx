import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import { prisma } from '@/prisma/client';

// interface Props {
//     params: {
//         id: number
//     }
// }

// export function GET(request: NextRequest, {params}: Props) {
// We don't have to define this interface here.
// We can define the shape of the object inline.
// So, we replace Props with square brackets and then add the Props property
// So, we don't need interface Props also.
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  // safeParse() return object that contain the result of validation.
  // But, parse() throws an exception, if there is a validation error
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const userExists = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!userExists)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: {
      id: userExists.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userExists = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!userExists)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  await prisma.user.delete({
    where: {
      id: userExists.id,
    },
  });

  return NextResponse.json({});
}
