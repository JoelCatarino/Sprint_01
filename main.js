const input = document.querySelector(".input");
const output = document.querySelector(".output");

function btnEncrypt() {
  const encryptedText = encrypt(input.value);
  output.value = encryptedText;
  input.value = "";
}

function btnDecrypt() {
  const decryptedText = decrypt(output.value);
  input.value = decryptedText;
  output.value = "";
}

function encrypt(EncryptedString) {
  let base = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  EncryptedString = EncryptedString.toLowerCase();

  for (let i = 0; i < base.length; i++) {
    if (EncryptedString.includes(base[i][0])) {
      EncryptedString = EncryptedString.replaceAll(base[i][0], base[i][1]);
    }
  }
  return EncryptedString;
}

function decrypt(encryptedString) {
  let dbase = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < dbase.length; i++) {
    if (encryptedString.includes(dbase[i][1])) {
      encryptedString = encryptedString.replaceAll(dbase[i][1], dbase[i][0]);
    }
  }

  return encryptedString;
}

function copyText() {
  const input = document.querySelector(".input");
  const output = document.querySelector(".output");

  navigator.clipboard.writeText(input.value + "\n" + output.value);
}
