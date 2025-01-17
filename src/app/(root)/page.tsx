"use client";
import { createUser } from "@/lib/actions/user.actions";
import React from "react";

export default function Home() {
  const handleClick = async () => {
    const user: CreateUserParams = {
      clerkId: "uywqeduwafd",
      email: "dsfds@gmail.com",
      username: "fsfsdf12",
      firstName: "gdsg",
      lastName: "dfg",
      photo: "dfgdfgdf",
    };

    const newUser = await createUser(user);
    console.log(newUser);
  };

  return (
    <div>
      <p onClick={handleClick} className="cursor-pointer">
        Home
      </p>
    </div>
  );
}
