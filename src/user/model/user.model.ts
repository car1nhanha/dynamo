import * as dynamoose from 'dynamoose';

const userSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

export const UserModel = dynamoose.model('User', userSchema);
