// use these route files for http request
import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import { prisma } from '@/prisma/client';

// Here, we can remove (request: NextRequest) request parameter
// But, if we remove (request: NextRequest) it, then nextjs use cache
// So, we can't get newest data
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // const userExists = await prisma.user.findUnique({
  //   where: {
  //     email: body.email,
  //   },
  // });

  // if (userExists)
  //   return NextResponse.json(
  //     { error: 'User already exists.' },
  //     { status: 400 }
  //   );

  // const newUser = await prisma.user.create({
  //   data: {
  //     name: body.name,
  //     email: body.email,
  //   },
  // });

  const newUser = await prisma.user.upsert({
    where: {
      email: body.email,
    },
    update: {},
    create: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
