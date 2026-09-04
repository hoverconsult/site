window.HOVER_CONFIG = {
  // Replace this value after deploying apps-script/Code.gs as a Google Apps Script web app.
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzxxYBldvn3oTpYe5Ll2yhPGtNLd9owyfz-q7kkVW-YNdDKiFdwvRa-nP98tglcLPKc/exec",
  // Set after deploying the EPCPro.gs and EPCPortal.html version of the backend.
  epcPortalUrl: "",
  epcSubscription: {
    // Enter the fixed monthly amount shown on the Paystack page before publishing prices.
    monthlyAmountGhs: null,
    monthlyPaymentUrl: "https://paystack.shop/pay/rpkykjmmzb",
    annualBaseMonths: 10,
    annualDiscountRate: 0.10,
    // A separate fixed-amount Paystack page is required for the annual charge.
    annualPaymentUrl: ""
  },
  whatsappNumber: "233244358113",
  paymentUrl: "https://paystack.shop/pay/ojqoo4kneu",
  consultationFee: "GHS 100",
  paymentServices: {
    hourlyConsultation: { label: "Hourly consultation", fee: "GHS 100", url: "https://paystack.shop/pay/ojqoo4kneu" },
    quoteVerification: { label: "Quote verification", fee: "GHS 200", url: "https://paystack.shop/pay/fz1mx7o07h" },
    siteSurvey: { label: "Site inspection / survey", fee: "GHS 500", url: "https://paystack.shop/pay/kn1m0n1cbj" },
    troubleshooting: { label: "Troubleshooting (solar or backup)", fee: "GHS 500", url: "https://paystack.shop/pay/lvgwei-6y9" },
    requestForQuote: { label: "Request for quote", fee: "GHS 400", url: "https://paystack.shop/pay/y-525u0bqf" },
    hardwareAdvisory: { label: "Hardware advisory", fee: "GHS 100", url: "https://paystack.shop/pay/dku1bi3pqe" },
    tenderSupport: { label: "Tender support", fee: "GHS 200", url: "https://paystack.shop/pay/2j5fp6vsvz" },
    rfqSupport: { label: "RFQ support — medium to large systems", fee: "GHS 200", url: "https://paystack.shop/pay/xt6uywglv3" }
  },
  facebookUrl: "https://www.facebook.com/Hoverconsult",
  linkedinUrl: "https://www.linkedin.com/company/hover-consult/?viewAsMember=true"
  ,publicBaseUrl: "https://hoverconsult.github.io/site/"
  ,analytics: {
    ga4MeasurementId: "",
    googleSearchConsoleVerification: "",
    metaPixelId: "",
    linkedinPartnerId: ""
  }
  ,socialApi: {
    metaConfigured: false,
    linkedinConfigured: false
  }
};
