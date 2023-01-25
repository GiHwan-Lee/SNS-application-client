const TOKEN = "token";

export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}

//localStorage를 사용해서 토큰을 저장하고 불러오도록 설정
