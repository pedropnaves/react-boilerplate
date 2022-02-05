import React, { FC } from 'react'

type LoginProps = {
  description?: string
}

const Login: FC<LoginProps> = ({
  description
}) => {
  return (
    <div>Login Container - {description}</div>
  )
}

export default Login