import React, { FC } from 'react'

type SignUpProps = {
  description?: string
}

const SignUp: FC<SignUpProps> = ({
  description
}) => {
  return (
    <div>Sign Up Container - {description}</div>
  )
}

export default SignUp