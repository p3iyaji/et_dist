import{u as v}from"./settingsStore-B-d95HMW.js";import{o as _,r as j,l as c,g as a,e as r,f as t,E as k,t as e,h as m,F as C,i as P}from"./index-DN1la__8.js";const T={class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},S={class:"bg-white rounded-lg p-6 w-full max-w-md"},z={class:"flex justify-between items-center mb-4"},I={class:"max-h-[70vh] overflow-y-auto"},O={class:"invoice-header",style:{"text-align":"center","margin-bottom":"10px"}},D={style:{"font-size":"14px",margin:"5px 0"}},L={style:{"font-weight":"bold"}},N={class:"customer-info",style:{margin:"5px 0"}},$={key:0},q={class:"items-list"},E={class:"item-name",style:{width:"40%",overflow:"hidden","text-overflow":"ellipsis"}},F={class:"item-qty",style:{width:"5%","text-align":"right"}},M={class:"item-price",style:{width:"25%","text-align":"right"}},A={class:"item-total",style:{width:"30%","text-align":"right"}},R={class:"summary",style:{"margin-top":"10px","border-top":"1px dashed #000","padding-top":"5px"}},B={class:"summary-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},V={key:0,class:"summary-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},G={key:1,class:"summary-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},Y={class:"summary-row total",style:{display:"flex","justify-content":"space-between","font-weight":"bold","border-top":"1px dashed #000","padding-top":"5px"}},H={class:"payment-info",style:{margin:"5px 0"}},Q={key:0},U={class:"footer",style:{"text-align":"center","margin-bottom":"10px"}},K={__name:"ThermalInvoice",props:{order:{type:Object,required:!0},businessInfo:{type:Object,default:()=>({name:"RPG-POS",address:"123 Main St, City",phone:"0800-123-4567",footer:"Returns within 7 days with receipt"})}},setup(s,{expose:h}){const l=v();_(async()=>{await l.fetchSettings()});const u=s,p=j(null),g=()=>new Date(u.order.date).toLocaleString();c(()=>l.getLogoUrl());const f=c(()=>l.settings.company_name||"RPG-POS"),x=c(()=>l.settings.company_address||""),w=c(()=>l.settings.company_phone||""),b=c(()=>l.settings.receipt_footer||"Thank you for your business!"),o=d=>`₦${parseFloat(d).toFixed(2)}`,y=()=>{if(!p.value){console.error("Invoice content not found");return}const d=window.open("","_blank");d.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice #${u.order.order_no}</title>
      <style>
        body {
          font-family: 'Courier New', monospace;
          font-size: 16px;
          width: 80mm;
          margin: 0;
          padding: 2px;
        }
        .thermal-invoice {
          width: 100%;
        }
        .invoice-header, .footer {
          text-align: center;
          margin-bottom: 10px;
        }
        .invoice-header h2 {
          font-size: 16px;
          margin: 2px 0;
        }
        .items-header, .item-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .item-name {
          width: 40%;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
        }
        .item-qty {
          width: 5%;
          text-align: right;
          font-size: 12px;
        }
        .item-price {
          width: 25%;
          text-align: right;
          font-size: 12px;
        }
        .item-total {
          width: 30%;
          text-align: right;
          font-size: 12px;
        }
        .summary {
          margin-top: 10px;
          border-top: 1px dashed #000;
          padding-top: 5px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .total {
          font-weight: bold;
          border-top: 1px dashed #000;
          padding-top: 5px;
        }
        .customer-info, .payment-info {
          margin: 5px 0;
        }
      </style>
    </head>
    <body>
      ${p.value.innerHTML}
      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
            window.close();
          }, 100);
        };
      <\/script>
    </body>
    </html>
  `),d.document.close()};return h({printInvoice:y}),(d,n)=>(r(),a("div",T,[t("div",S,[t("div",z,[n[1]||(n[1]=t("h3",{class:"text-lg font-bold"},"Invoice Preview",-1)),t("button",{onClick:n[0]||(n[0]=i=>d.$emit("close")),class:"text-gray-500 hover:text-gray-700"}," ✕ ")]),t("div",I,[t("div",{ref_key:"invoiceContent",ref:p,class:"thermal-invoice p-4",style:{"font-family":"'Courier New', monospace","font-size":"12px",width:"80mm"}},[t("div",O,[t("h2",D,e(f.value),1),t("p",null,e(x.value),1),t("p",null,e(w.value),1),t("p",L,"Order #: "+e(s.order.order_no),1),t("p",null,"Date: "+e(g()),1)]),t("div",N,[t("p",null,"Customer: "+e(s.order.customer.name),1),s.order.customer.phone?(r(),a("p",$,"Phone: "+e(s.order.customer.phone),1)):m("",!0)]),n[6]||(n[6]=k('<div class="items-header" style="display:flex;justify-content:space-between;margin-bottom:3px;"><span class="item-name" style="width:40%;overflow:hidden;text-overflow:ellipsis;">ITEM</span><span class="item-qty" style="width:5%;text-align:right;">QTY</span><span class="item-price" style="width:25%;text-align:right;">PRICE</span><span class="item-total" style="width:30%;text-align:right;">TOTAL</span></div>',1)),t("div",q,[(r(!0),a(C,null,P(s.order.items,i=>(r(),a("div",{key:i.id,class:"item-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},[t("span",E,e(i.name||`Product ${i.product_id}`),1),t("span",F,e(i.quantity),1),t("span",M,e(o(i.unit_price)),1),t("span",A,e(o(i.total)),1)]))),128))]),t("div",R,[t("div",B,[n[2]||(n[2]=t("span",null,"Subtotal:",-1)),t("span",null,e(o(s.order.subtotal)),1)]),s.order.product_discounts>0?(r(),a("div",V,[n[3]||(n[3]=t("span",null,"Product Discounts:",-1)),t("span",null,"-"+e(o(s.order.product_discounts)),1)])):m("",!0),s.order.general_discount>0?(r(),a("div",G,[n[4]||(n[4]=t("span",null,"Order Discount:",-1)),t("span",null,"-"+e(o(s.order.general_discount)),1)])):m("",!0),t("div",Y,[n[5]||(n[5]=t("span",null,"TOTAL:",-1)),t("span",null,e(o(s.order.total)),1)])]),t("div",H,[t("p",null,"Payment Method: "+e(s.order.payment_method),1),t("p",null,"Amount Tendered: "+e(o(s.order.amount_tendered)),1),s.order.change_due>0?(r(),a("p",Q,"Change Due: "+e(o(s.order.change_due)),1)):m("",!0)]),t("div",U,[t("p",null,e(b.value),1)])],512)]),t("div",{class:"mt-4 flex justify-end"},[t("button",{onClick:y,class:"bg-teal-800 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"}," Print Invoice ")])])]))}};export{K as default};
