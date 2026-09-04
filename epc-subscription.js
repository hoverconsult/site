(function(root){
  'use strict';
  function annualAmount(monthly,baseMonths,discountRate){
    const amount=Number(monthly),months=Number(baseMonths),discount=Number(discountRate);
    if(!(amount>0)||!(months>0)||discount<0||discount>=1)return null;
    return Math.round(amount*months*(1-discount)*100)/100;
  }
  function money(value){return new Intl.NumberFormat('en-GH',{style:'currency',currency:'GHS',minimumFractionDigits:2}).format(value)}
  function init(){
    const cfg=(root.HOVER_CONFIG&&root.HOVER_CONFIG.epcSubscription)||{},monthly=Number(cfg.monthlyAmountGhs),annual=annualAmount(monthly,cfg.annualBaseMonths||10,cfg.annualDiscountRate==null ? .1 : cfg.annualDiscountRate);
    const buttons=[...document.querySelectorAll('[data-billing]')],amount=document.getElementById('subscriptionAmount'),suffix=document.getElementById('billingSuffix'),label=document.getElementById('billingLabel'),saving=document.getElementById('subscriptionSaving'),heading=document.getElementById('featureHeading'),checkout=document.getElementById('subscriptionCheckout'),note=document.getElementById('checkoutNote');
    if(!buttons.length)return;
    function render(period){
      const isAnnual=period==='annual';
      buttons.forEach(b=>{const active=b.dataset.billing===period;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});
      label.textContent=isAnnual?'Annual access':'Monthly access';heading.textContent=isAnnual?'Everything included for 12 months':'Included every month';
      amount.textContent=(isAnnual?annual:monthly)>0?money(isAnnual?annual:monthly):'Price confirmed at checkout';suffix.textContent=isAnnual?' / year':' / month';
      saving.textContent=isAnnual?'Pay the equivalent of nine monthly payments — a 25% saving versus paying monthly for 12 months.':'Flexible 30-day access with monthly renewal.';
      const url=isAnnual?cfg.annualPaymentUrl:cfg.monthlyPaymentUrl;
      checkout.textContent=isAnnual?'Continue to annual Paystack checkout':'Continue to monthly Paystack checkout';checkout.href=url||'#';checkout.classList.toggle('disabled',!url);checkout.setAttribute('aria-disabled',String(!url));
      note.textContent=url?'Secure payment is completed on Paystack.':'Annual checkout will open after Hover Consult publishes the matching fixed-price Paystack page.';
    }
    buttons.forEach(b=>b.addEventListener('click',()=>render(b.dataset.billing)));
    checkout.addEventListener('click',e=>{if(checkout.getAttribute('aria-disabled')==='true')e.preventDefault()});render('monthly');
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={annualAmount};
  if(root.document){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init()}
})(typeof window!=='undefined'?window:globalThis);
