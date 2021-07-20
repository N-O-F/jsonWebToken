![JsonWebToken Image](/Assets/jsonWebtoken.png)

# JSON Web Token Server

This server created active & refresh tokens for rest of the servers. 

#### Mock Requests

###### Login Token Request

```
/api/v1/auth/login

Body
{
    "username":"User Name"
}
```


```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFnaGF2IHdhc3RoaSIsImlhdCI6MTYyNjc3OTY5NCwiZXhwIjoxNjI2NzgwNTk0fQ.I83XUBxjL8bcTgvq92IoDNEtlfvi8VxD-A0ZJjEj7AA",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFnaGF2IHdhc3RoaSIsImlhdCI6MTYyNjc3OTY5NH0.QAd0EjKH10CCHMvtMrBT7VtayEFgkAeIxyh9vzYmS84"
}
```

###### Regenerate Token Request

```
/api/v1/auth/token

Body
{
	"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFnaGF2IHdhc3RoaSIsImlhdCI6MTYyNjc3OTY5NH0.QAd0EjKH10CCHMvtMrBT7VtayEFgkAeIxyh9vzYmS84"
}
```

```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFnaGF2IHdhc3RoaSIsImlhdCI6MTYyNjc3OTc1NywiZXhwIjoxNjI2NzgwNjU3fQ.JSIM4LDfbAFoLr_fZC_j_mEvNNXKEHUGF-2ALtyZlxI"
}
```

###### Logout Request

```
/api/v1/auth/logout

Body
{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFnaGF2IHdhc3RoaSIsImlhdCI6MTYyNjcxNTY1Mn0.mB3GByoHC1p01HLdiixg1ooa86xGX3c64y-xLP0HOAY"
}
```


This server currently works on basis of username.
