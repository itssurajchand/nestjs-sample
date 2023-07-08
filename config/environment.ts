const DEV = {
  DB_URL: 'mongodb://keyless:fosstechnix%40123@157.175.209.69:27017/keyless-dev',
  DB_USER: 'keyless',
  DB_PASS: 'fosstechnix@123',
  COMPANY_PAGE:'https://register.keyless-dev.ae',
  OUTLET_ID:'45a60d52-7d38-4716-a67e-bec54ef79365',
  API_KEY:'OGI0ZTExMjgtYTA3Mi00MjNkLWJkOTAtNTJkZTcwNWUwNTY3OmEwODU0NmJmLTBhZGEtNDViNi05ODMxLTIxMGYxY2RkMDFkNg==',
  PAYMENT_DOMAIN:'https://api-gateway.sandbox.ngenius-payments.com',
  LOGIN_URL:'https://login.keyless-dev.ae',
  //ADMINFRONTURl: "https://admin.keyless-dev.ae/",
  ADMINFRONTURl: "https://admin.keyless-dev.ae",
  PROD: false,
  ADMIN_EMAIL:"kunalkp1710@gmail.com",
  LOGGING:"DB",
  ISEO_SERVER:"https://sirademo.iseov364.com/api",
  SECRET_KEY:"C81F90CBF73D30F1A75E23C1A9E855C6",
  PREFIX_NAME:"https://",
  DOMAIN_NAME:".keyless-dev.ae",
};
const LOCAL_DEV = {
  DB_URL: 'mongodb+srv://root:root@cluster0.d2xkgsu.mongodb.net/keyless-dev',
  DB_USER: 'root',
  DB_PASS: 'root',
  COMPANY_PAGE:'https://register.keyless-dev.ae',
  OUTLET_ID:'45a60d52-7d38-4716-a67e-bec54ef79365',
  API_KEY:'OGI0ZTExMjgtYTA3Mi00MjNkLWJkOTAtNTJkZTcwNWUwNTY3OmEwODU0NmJmLTBhZGEtNDViNi05ODMxLTIxMGYxY2RkMDFkNg==',
  PAYMENT_DOMAIN:'https://api-gateway.sandbox.ngenius-payments.com',
  LOGIN_URL:'https://login.keyless-dev.ae',
  //ADMINFRONTURl: "https://admin.keyless-dev.ae/",
  ADMINFRONTURl: "http://localhost:3001",
  PROD: false,
  ADMIN_EMAIL:"mrt@mailinator.com",
  ISEO_SERVER:"https://sirademo.iseov364.com/api",
  SECRET_KEY:"mrtech@123#123@123#123",
  PREFIX_NAME:"https://",
  DOMAIN_NAME:".keyless-dev.ae",
};
const PROD = {
  
  DB_URL: 'mongodb://keyless-admin:KJHuihjNM766%5E%26yhjM@172.31.40.187:27017/keyless',
  DB_USER: 'keyless-admin',
  DB_PASS: 'KJHuihjNM766%5E%26yhjM',
  COMPANY_PAGE:'https://register.keyless.ae',
  OUTLET_ID:'45a60d52-7d38-4716-a67e-bec54ef79365',
  API_KEY:'OGI0ZTExMjgtYTA3Mi00MjNkLWJkOTAtNTJkZTcwNWUwNTY3OmEwODU0NmJmLTBhZGEtNDViNi05ODMxLTIxMGYxY2RkMDFkNg==',
  PAYMENT_DOMAIN:'https://api-gateway.sandbox.ngenius-payments.com',
  LOGIN_URL:'https://login.keyless.ae',
  //ADMINFRONTURl: "https://admin.keyless-dev.ae/",
  ADMINFRONTURl: "https://admin.keyless-dev.ae",
  PROD: true,
  ADMIN_EMAIL:"mrt@mailinator.com",
  ISEO_SERVER:"https://sirademo.iseov364.com/api",
  SECRET_KEY:"mrtech@123#123@123#123",
  PREFIX_NAME:"https://",
  DOMAIN_NAME:".keyless-dev.ae",
};

let json:any = {...DEV};
json.RECAPTCHA_SECRET_KEY = "6Lcj2aAeAAAAAKUARl0GkIa2ZbCwK87LLwhTMvFA";

export const ENV = json;