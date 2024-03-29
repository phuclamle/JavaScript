function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}


class Student {
  constructor(name, age, gender, klass){
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.klass = klass;
  }
}
