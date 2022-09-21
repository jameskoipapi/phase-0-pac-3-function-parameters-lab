function introduction (name) {
  return   "Hi, my name is ${name}."
}
function introductionWithLanguage(name,language) {
     return "Hi my name is" + name + " and i am learningto program in" +  language + ".";
}
function introductionWithLanguageOptional(name,language) {
     return "Hi my name is" + name + " and i am learning to program in " + language + ".";
}
function introductionWithLanguageOptional(name,language="javascScript") {
     return "Hi my name is" + name + " and i am learning to program in " + language + ".";
}