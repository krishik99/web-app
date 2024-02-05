import React, { useState } from "react";
import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useForm } from "react-hook-form"
import * as API from '../api/services'
import { useAppContext } from "../contexts/AppContext";
import { SUCCESS,ERROR } from "../constants";
import { useNavigate } from "react-router-dom";
import {useQueryClient, useMutation} from 'react-query'
const UserForm = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const isLogin = window.location.pathname.slice(1).toLowerCase() === "signin" ? true : false;
  const {setShowToast} = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()

  const showToastr = (message,type) => {
    setShowToast({message:message,type:type})
  }

  const loginSuccess = async (loginResponse) => {
    console.log("registered",loginResponse)
    const response = await loginResponse.json();
    console.log(response)
   if(!loginResponse.ok){
     showToastr(response.message,ERROR)
     return;
   }
   showToastr('Login Successfull!',SUCCESS);
   reset();
   await queryClient.invalidateQueries('validateToken');
   navigate('/');
  }

  const RegisterSuccess = async (registerResponse) => {
    const response = await registerResponse.json();
    console.log(response)
   if(!registerResponse.ok){
     showToastr(response.message,ERROR)
     return;
   }
   showToastr('User Created Successfully!',SUCCESS);
   reset();
   navigate('/signIn');
  }

  const mutation = useMutation(isLogin ? API.login : API.register ,{
    onSuccess : (res) => {
      if(isLogin){
        loginSuccess(res)
      }else{
        RegisterSuccess(res)
      }
    },
    onError : (error) => {
      console.log(error)
      showToastr('Something went wrong!',ERROR)
    }
  })

  const onSubmit = (data) => {
    console.log(isLogin)
    mutation.mutate(data)
  }


  return (
    <div>
      <Box
        sx={{
          margin: { lg: "2em", md: "5em", xs: "1em" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="2em" sx={{width:{lg:'50em',md:'30em',xs:'15em'},padding:'2em',
          boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
          <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            color: "black",
            textAlign: "center",
            marginBottom: "1em",
            background: "linear-gradient(303deg, rgba(200,74,218,1) 0%, rgba(255,156,69,1) 100%)",
            borderRadius:"6px",
            padding:"0.5em",
            color:"#33292947"
          }}
        >
          {isLogin ? 'Sign In' : 'Create an Account'}
        </Typography>
          {!isLogin && (
                        <Stack
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          flexDirection: "row",
                          gap: "1em",
                        }}
                      >
                        <TextField
                          sx={{ flexGrow: "1" }}
                          id="firstName"
                          label="First Name"
                          error={errors.firstName ? true : false}
                          {...register("firstName", { required: true, minLength:3 })}
                          helperText={errors.firstName && "This field is required"}
                        />
                        <TextField
                          sx={{ flexGrow: "1" }}
                          id="lastName"
                          label="Last Name"
                          error={errors.lastName ? true : false}
                          {...register("lastName", { required: true, minLength:1 })}
                          helperText={errors.lastName && "This field is required"}
                        />
                      </Stack>
          )
          
          }

            <Stack>
              <TextField
                type="email"
                sx={{ flexGrow: "1" }}
                id="Email"
                label="E-mail"
                error={errors.email ? true : false}
                {...register("email", { required: true })}
                helperText={errors.email && "This field is required"}                
              />
            </Stack>
            <Stack>
              <TextField
                type={showPassword ? 'text' : 'password'}
                sx={{ flexGrow: "1" }}
                id="Password"
                label="Password"
                error={errors.password ? true : false}
                {...register("password", { required: true, minLength:6 })}
                helperText={errors.password && "This field is required"}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                   >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>,
                }}
              />
            </Stack>
            { !isLogin && (
                          <Stack>
                          <TextField
                            type={showConfirmPassword ? 'text' : 'password'}
                            sx={{ flexGrow: "1" }}
                            id="Confirm Password"
                            label="Confirm Password"
                            error={errors.confirmPassword ? true : false}
                            {...register("confirmPassword", {
                              validate:(val) => {
                                if(!val){
                                  return "This field is Required"
                                }else if(watch("password") !== val){
                                   return "Your passwords do not match" 
                                }
                            }}
                            )}
                            helperText={errors.confirmPassword && errors.confirmPassword.message}
                            InputProps={{
                              endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                               >
                                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>,
                            }}
                          />
                        </Stack>
            )
            }

            <Stack>
            <Button type="submit" className="buttons" variant="contained" startIcon={<ArrowUpwardIcon />}>Sign {isLogin ? 'In' : 'Up'}</Button>
            </Stack>
            {isLogin && 
              <Stack>
              <Button onClick={()=>navigate('/signUp')} variant="contained" className="buttons" sx={{background:'#ff864d !important',textTransform:'capitalize'}}>Create an account</Button>
            </Stack>
            }
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default UserForm;
