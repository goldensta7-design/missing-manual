// THE MISSING MANUAL — API Client
var API_URL = 'https://missing-manual-backend-production.up.railway.app/api';

var Api = {
  register: function(name, email, password) {
    return fetch(API_URL + '/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, password: password })
    }).then(function(r) { return r.json(); });
  },

  login: function(email, password) {
    return fetch(API_URL + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    }).then(function(r) { return r.json(); });
  },

  getMe: function() {
    var token = localStorage.getItem('tmm_token');
    if (!token) return Promise.resolve(null);
    return fetch(API_URL + '/auth/me', {
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(function(r) { return r.json(); });
  },

  updateProfile: function(name, bio) {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/auth/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ name: name, bio: bio })
    }).then(function(r) { return r.json(); });
  },

  changePassword: function(currentPassword, newPassword) {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/auth/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ currentPassword: currentPassword, newPassword: newPassword })
    }).then(function(r) { return r.json(); });
  },

  deleteAccount: function() {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/auth/account', {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(function(r) { return r.json(); });
  },

  getLessons: function(category, type, page) {
    var params = new URLSearchParams();
    if (category) params.set('category', category);
    if (type) params.set('type', type);
    if (page) params.set('page', page);
    return fetch(API_URL + '/lessons?' + params.toString())
      .then(function(r) { return r.json(); });
  },

  submitLesson: function(data) {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/lessons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify(data)
    }).then(function(r) { return r.json(); });
  },

  wishLesson: function(id) {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/lessons/' + id + '/wish', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(function(r) { return r.json(); });
  },

  saveLesson: function(id) {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/lessons/' + id + '/save', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(function(r) { return r.json(); });
  },

  getSavedLessons: function() {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/lessons/user/saved', {
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(function(r) { return r.json(); });
  },

  getMySubmissions: function() {
    var token = localStorage.getItem('tmm_token');
    return fetch(API_URL + '/lessons/user/submissions', {
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(function(r) { return r.json(); });
  }
};

// Override Auth from app.js to use real token-based auth
Auth.setUser = function(token, user) {
  localStorage.clear();
  localStorage.setItem('tmm_token', token);
  var u = {
    name: user.name,
    email: user.email,
    handle: user.handle,
    initial: user.name[0].toUpperCase(),
    bio: user.bio || '',
    reputation: user.reputation || 0,
    contributions: user.contributions || 0
  };
  localStorage.setItem('tmm_user', JSON.stringify(u));
};

Auth.isLoggedIn = function() {
  return !!localStorage.getItem('tmm_token');
};

Auth.logout = function() {
  localStorage.clear();
};
