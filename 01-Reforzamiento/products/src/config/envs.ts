import 'dotenv/config'
import { join } from 'path'
import * as joi from 'joi'

interface EnvVars{
  PORT: number;
}
const envSchema = joi.object({
  PORT: joi.number().required()
})
.unknown(true);

const {error,value}=envSchema.validate(process.env);

//console.log({error});
//console.log({envVars});

if (error)
  {
    throw new Error(`Config validation error: ${error.message}`);
  }

const envVars:EnvVars = value;
export const envs={
  port: envVars.PORT,
}