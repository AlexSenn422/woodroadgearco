(function() {
  var checkout = document.getElementsByName('checkout')[0];
  var idme = `<div class="idme-shopify">
    <span class='idme-btn-affinity'>Military, Nurses, and Responders receive 20% off</span>
    <span class="idme-btn-unify">
      <a href="javascript:void(0)" onclick="idmePopUp()">
        <img src="https://s3.amazonaws.com/idme/buttons/v4/verify-with-idme.png" alt="ID.me" style="height:37px"/>
      </a>
    </span>

    <span class='idme-btn-verification'>
      <img alt='Lock' src='https://s3.amazonaws.com/idme/assets/lock.png' class='idme-btn-lock' width='8'>
      Verification by ID.me &bull;
      <a href='https://www.id.me/about' class='idme-about-link' target='_new'>
        What is ID.me?
      </a>
    </span>
  </div>`;

  checkout.insertAdjacentHTML("afterend", idme);
})();

function idmePopUp() {
  var body = document.body;
  var html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

  var top   = (height - 780) / 4;
  var left  = (width - 800) / 2;

  window.open("https://shopify.id.me/oauth/checkpoint/apline-stride", "", "scrollbars=yes,menubar=no,status=no,location=no,toolbar=no,width=800,height=780,top=" + top + ",left=" + left);
};

var urlParams = new URLSearchParams(window.location.search)

if (urlParams.get('popup')) {
  if (window.opener) {
    window.opener.location.href = "https://apline-stride.myshopify.com/checkout";
  	window.close();
  } 
  else {
  	window.location.href = "https://apline-stride.myshopify.com/checkout";
  }
};

if (urlParams.get('error')) {
  window.close();
};

