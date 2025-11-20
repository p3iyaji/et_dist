import{r as b,g as r,e as a,f as t,D as v,t as e,j as c,h as m,F as _,i as j}from"./index-C6ml-qKZ.js";const k={class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},C={class:"bg-white rounded-lg p-6 w-full max-w-md"},I={class:"flex justify-between items-center mb-4"},P={class:"max-h-[70vh] overflow-y-auto"},T={class:"invoice-header",style:{"text-align":"center","margin-bottom":"10px"}},z={style:{"font-size":"14px",margin:"5px 0"}},D={style:{"font-weight":"bold"}},O={class:"customer-info",style:{margin:"5px 0"}},S={key:0},N={class:"items-list"},$={class:"item-name",style:{width:"40%",overflow:"hidden","text-overflow":"ellipsis"}},q={class:"item-qty",style:{width:"5%","text-align":"right"}},F={class:"item-price",style:{width:"25%","text-align":"right"}},L={class:"item-total",style:{width:"30%","text-align":"right"}},A={class:"summary",style:{"margin-top":"10px","border-top":"1px dashed #000","padding-top":"5px"}},E={class:"summary-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},M={key:0,class:"summary-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},R={key:1,class:"summary-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},B={class:"summary-row total",style:{display:"flex","justify-content":"space-between","font-weight":"bold","border-top":"1px dashed #000","padding-top":"5px"}},V={class:"payment-info",style:{margin:"5px 0"}},G={key:0},Y={class:"footer",style:{"text-align":"center","margin-bottom":"10px"}},Q={__name:"ThermalInvoice",props:{order:{type:Object,required:!0},businessInfo:{type:Object,default:()=>({name:"RPG-POS",address:"123 Main St, City",phone:"0800-123-4567",footer:"Returns within 7 days with receipt"})}},setup(s,{expose:y}){const l=s,p=b(null),h=()=>new Date(l.order.date).toLocaleString(),f=l.businessInfo.name||"RPG-POS",x=l.businessInfo.address||"",g=l.businessInfo.phone||"",w=l.businessInfo.footer||"Thank you for your business!",o=d=>`₦${parseFloat(d).toFixed(2)}`,u=()=>{if(!p.value){console.error("Invoice content not found");return}const d=window.open("","_blank");d.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice #${l.order.order_no}</title>
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
  `),d.document.close()};return y({printInvoice:u}),(d,n)=>(a(),r("div",k,[t("div",C,[t("div",I,[n[1]||(n[1]=t("h3",{class:"text-lg font-bold"},"Invoice Preview",-1)),t("button",{onClick:n[0]||(n[0]=i=>d.$emit("close")),class:"text-gray-500 hover:text-gray-700"}," ✕ ")]),t("div",P,[t("div",{ref_key:"invoiceContent",ref:p,class:"thermal-invoice p-4",style:{"font-family":"'Courier New', monospace","font-size":"12px",width:"80mm"}},[t("div",T,[t("h2",z,e(c(f)),1),t("p",null,e(c(x)),1),t("p",null,e(c(g)),1),t("p",D,"Order #: "+e(s.order.order_no),1),t("p",null,"Date: "+e(h()),1)]),t("div",O,[t("p",null,"Customer: "+e(s.order.customer.name),1),s.order.customer.phone?(a(),r("p",S,"Phone: "+e(s.order.customer.phone),1)):m("",!0)]),n[6]||(n[6]=v('<div class="items-header" style="display:flex;justify-content:space-between;margin-bottom:3px;"><span class="item-name" style="width:40%;overflow:hidden;text-overflow:ellipsis;">ITEM</span><span class="item-qty" style="width:5%;text-align:right;">QTY</span><span class="item-price" style="width:25%;text-align:right;">PRICE</span><span class="item-total" style="width:30%;text-align:right;">TOTAL</span></div>',1)),t("div",N,[(a(!0),r(_,null,j(s.order.items,i=>(a(),r("div",{key:i.id,class:"item-row",style:{display:"flex","justify-content":"space-between","margin-bottom":"3px"}},[t("span",$,e(i.name||`Product ${i.product_id}`),1),t("span",q,e(i.quantity),1),t("span",F,e(o(i.unit_price)),1),t("span",L,e(o(i.total)),1)]))),128))]),t("div",A,[t("div",E,[n[2]||(n[2]=t("span",null,"Subtotal:",-1)),t("span",null,e(o(s.order.subtotal)),1)]),s.order.product_discounts>0?(a(),r("div",M,[n[3]||(n[3]=t("span",null,"Product Discounts:",-1)),t("span",null,"-"+e(o(s.order.product_discounts)),1)])):m("",!0),s.order.general_discount>0?(a(),r("div",R,[n[4]||(n[4]=t("span",null,"Order Discount:",-1)),t("span",null,"-"+e(o(s.order.general_discount)),1)])):m("",!0),t("div",B,[n[5]||(n[5]=t("span",null,"TOTAL:",-1)),t("span",null,e(o(s.order.total)),1)])]),t("div",V,[t("p",null,"Payment Method: "+e(s.order.payment_method),1),t("p",null,"Amount Tendered: "+e(o(s.order.amount_tendered)),1),s.order.change_due>0?(a(),r("p",G,"Change Due: "+e(o(s.order.change_due)),1)):m("",!0)]),t("div",Y,[t("p",null,e(c(w)),1)])],512)]),t("div",{class:"mt-4 flex justify-end"},[t("button",{onClick:u,class:"bg-teal-800 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"}," Print Invoice ")])])]))}};export{Q as default};
