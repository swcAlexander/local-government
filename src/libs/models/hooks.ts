export const handlleSaveError = (error: any, data: any | undefined, next: any) => {
  const { name, code } = error;
  error.status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  next();
};

export const runValidateAtupdate = function (this: { options: { runValidators: boolean } }, next: any) {
  this.options.runValidators = true;
  next();
};
