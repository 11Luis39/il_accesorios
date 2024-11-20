const p=document.querySelector(".comment-editor");p&&new Quill(p,{modules:{toolbar:".comment-toolbar"},placeholder:"Describe...",theme:"snow"});$(function(){isDarkStyle?(config.colors_dark.borderColor,config.colors_dark.bodyBg,config.colors_dark.headingColor):(config.colors.borderColor,config.colors.bodyBg,config.colors.headingColor);var o=$(".datatables-supplier-list"),l=$(".select2");if(l.length&&l.each(function(){var a=$(this);a.wrap('<div class="position-relative"></div>').select2({dropdownParent:a.parent(),placeholder:a.data("placeholder")})}),o.length){var i=o.DataTable({ajax:assetsPath+"json/ecommerce-supplier-list.json",columns:[{data:""},{data:"id"},{data:"categories"},{data:"total_products"},{data:"total_earnings"},{data:""}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:1,targets:0,render:function(a,s,e,r){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:4,checkboxes:!0,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:2,responsivePriority:2,render:function(a,s,e,r){var t=e.categories,d=e.supplier_detail,c=e.cat_image,u=e.id;if(c)var m='<img src="'+assetsPath+"img/ecommerce-images/"+c+'" alt="Product-'+u+'" class="rounded-2">';else{var f=Math.floor(Math.random()*6),b=["success","danger","warning","info","dark","primary","secondary"],g=b[f],t=e.supplier_detail,n=t.match(/\b\w/g)||[];n=((n.shift()||"")+(n.pop()||"")).toUpperCase(),m='<span class="avatar-initial rounded-2 bg-label-'+g+'">'+n+"</span>"}var v='<div class="d-flex align-items-center"><div class="avatar-wrapper me-2 rounded-2 bg-label-secondary"><div class="avatar">'+m+'</div></div><div class="d-flex flex-column justify-content-center"><span class="text-body text-wrap fw-medium">'+t+'</span><span class="text-muted text-truncate mb-0 d-none d-sm-block"><small>'+d+"</small></span></div></div>";return v}},{targets:3,responsivePriority:3,render:function(a,s,e,r){var t=e.total_products;return'<div class="text-sm-end">'+t+"</div>"}},{targets:4,orderable:!1,render:function(a,s,e,r){var t=e.total_earnings;return"<div class='h6 mb-0 text-sm-end'>"+t+"</div"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(a,s,e,r){return'<div class="d-flex align-items-sm-center justify-content-sm-center"><button class="btn btn-sm btn-icon delete-record me-2"><i class="ti ti-trash"></i></button><button class="btn btn-sm btn-icon"><i class="ti ti-edit"></i></button></div>'}}],order:[2,"desc"],dom:'<"card-header d-flex flex-wrap pb-2"<f><"d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row mb-3 mb-md-0 ps-1 ms-1 align-items-baseline"lB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',lengthMenu:[7,10,20,50,70,100],language:{sLengthMenu:"_MENU_",search:"",searchPlaceholder:"Search supplier"},buttons:[{text:'<i class="ti ti-plus ti-xs me-0 me-sm-2"></i><span class="d-none d-sm-inline-block">Agregar Categoria</span>',className:"add-new btn btn-primary ms-2 waves-effect waves-light",attr:{"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasEcommercesupplierList"}}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(a){var s=a.data();return"Details of "+s.categories}}),type:"column",renderer:function(a,s,e){var r=$.map(e,function(t,d){return t.title!==""?'<tr data-dt-row="'+t.rowIndex+'" data-dt-column="'+t.columnIndex+'"><td> '+t.title+':</td> <td class="ps-0">'+t.data+"</td></tr>":""}).join("");return r?$('<table class="table"/><tbody />').append(r):!1}}}});$(".dt-action-buttons").addClass("pt-0"),$(".dataTables_filter").addClass("me-3 ps-0")}$(".datatables-supplier-list tbody").on("click",".delete-record",function(){i.row($(this).parents("tr")).remove().draw()}),setTimeout(()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")},300)});(function(){const o=document.getElementById("eCommercesupplierListForm");FormValidation.formValidation(o,{fields:{supplierTitle:{validators:{notEmpty:{message:"Please enter supplier title"}}},slug:{validators:{notEmpty:{message:"Please enter slug"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"is-valid",rowSelector:function(l,i){return".mb-3"}}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus}})})();
