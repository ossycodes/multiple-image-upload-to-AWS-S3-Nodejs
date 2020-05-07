# File Uploads on AWS Bucket

## Description :
>Backend Nodejs App for uploading multiple Images to AWS-S3 using NODEJS



## Use:

Update your AWS accessKeyId, secretAccessKey and Bucket name in `./routes/api/profile.js`

``` ruby
const s3 = new aws.S3({
	accessKeyId: 'xxx',
	secretAccessKey: 'xxx',
	Bucket: 'yourbucketname'
});

```

## Installation Instructions :wrench:

1. Clone the repo using `git clone https://github.com/ossycodes/multiple-image-upload-to-AWS-S3-Nodejs`
2. `cd multiple-image-upload-to-AWS-S3-Nodejs`
3. `npm install`
4. `npm start`

## Built With:

1. Node
2. Express

## Credit goes to this Tutorial Videos:

* [Create AWS Bucket](https://youtu.be/cDj4LPTLR3o)
* [Single File Upload on AWS](https://youtu.be/e-gb9IBfSw8)
* [Multiple File Upload on AWS](https://youtu.be/eLkVQI2xBD0)

## Useful Links :link:

* [Create AWS Bucket Blog](https://codeytek.com/how-to-create-a-user-and-bucket-amazon-web-services-aws/)
* [File Upload on AWS Blog](https://codeytek.com/file-or-image-uploads-on-amazon-web-services-aws-using-react-node-and-express-js-aws-sdk/)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
