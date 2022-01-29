module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b7bc8114f78a80a6b3601281580f7f3'),
  },
});
