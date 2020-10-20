import { NestFactory } from "@nestjs/core";
import { Context } from "aws-lambda";
import { AppModule } from "src/app.module";
import { AppService } from "src/app.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  return app;
}

export const handler = async (event: any, context: Context) => {
  const app = await bootstrap();
  const appService = app.get<AppService>(AppService);
  console.log(appService.getHello());
}