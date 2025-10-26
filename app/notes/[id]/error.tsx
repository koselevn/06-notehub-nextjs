"use client"

type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
    <p>Could not fetch note details. {error.message}</p>
}

export default Error