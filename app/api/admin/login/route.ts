import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  // TODO: replace with DB lookup later
  if (!email || !password) {
    return NextResponse.json(
      { error: "Missing credentials" },
      { status: 400 }
    )
  }

  // Example validation placeholder
  // Later this becomes database check
  const isValidUser = false

  if (!isValidUser) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ success: true })

  response.cookies.set("admin-token", "secure-session-token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  })

  return response
}