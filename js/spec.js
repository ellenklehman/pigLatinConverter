describe ("piggyProgram", function() {
  it("should add an ay to any word that starts with a vowel", function() {
    piggyProgram("apple").should.equal("appleay")
  });
  it("should remove a consonant at the beginning of the word and place it at the end", function() {
    piggyProgram("cat").should.equal("atcay")
  });
  it("should remove multiple consonants at the beginning of a word and place them at the end", function() {
    piggyProgram("knife").should.equal("ifeknay")
  });
  it("should remove 'qu' when it arrives finds it in the beginning of a word", function() {
    piggyProgram("queen").should.equal("eenquay")
  });
  it("should not remove 'y' when it serves as a vowel after the first letter of the word", function() {
    piggyProgram("style").should.equal("ylestay");
  });
  it("should manipulate each word as specified above in an sentence", function () {
    piggyProgram("multiple words are hard").should.equal("ultiplemay ordsway areay ardhay");
  });
});
