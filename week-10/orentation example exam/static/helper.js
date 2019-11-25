//dom manipulation
'use strict';

async function post_url() {
  let url = document.getElementById('url').value;
  let alias = document.getElementById('alias').value;
  let json_resp;
  let response = await fetch(`http://localhost:3001/api/links`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: url, alias: alias })
  });

  try {
    json_resp = await response.json()
  }
  catch (err) {
    console.log(`Could not JSONIFY response:${response.body} Error:${err}`)
    return
  }
  if ("error" in json_resp) {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Your alias is already in use!'
  } else {
    document.getElementById('message').innerHTML = `Your URL is aliased to ${json_resp.url} 
    and your secret code ${json_resp.secretcode}`
    document.getElementById('url').value = "";
    document.getElementById('alias').value = "";
  }
};