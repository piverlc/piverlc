import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserAuth } from "../../../types/types";

const schema = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup.string().min(4).max(8).required("Required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserAuth>({
    resolver: yupResolver(schema),
  });

  const formHandler: SubmitHandler<UserAuth> = (data: UserAuth, e) => {
    alert(JSON.stringify(data, null, 4));
    console.log(data);
    e?.target.reset();
    reset();
  };

  return (
    <Fragment>
      <div className="login_container">
        <Head>
          <title>Login Page</title>
        </Head>
        <Sheet
          sx={{
            maxWidth: 400,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          component="form"
          onSubmit={handleSubmit(formHandler)}
        >
          <header>
            <Typography level="h4" component="h1">
              <b>{"Welcome!"}</b>
            </Typography>
            <Typography level="body2">{"Sign in to continue"}</Typography>
          </header>
          <TextField
            autoFocus
            type="email"
            label="Email"
            placeholder="johndoe@email.com"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            label="Password"
            placeholder="password"
            autoComplete="user-password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            sx={{
              mt: 1,
            }}
            variant="solid"
            type="submit"
          >
            {"Log in"}
          </Button>
          <Typography
            endDecorator={<Link href="/auth/sign-up">{"Sign up"}</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            {"Don't have an account?"}
          </Typography>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default LoginForm;
