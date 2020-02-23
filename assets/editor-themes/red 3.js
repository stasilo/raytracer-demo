ace.define("ace/theme/red",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-red";
exports.cssText =
'   .ace-red .ace_gutter {  '  +
'     background: #1A2233;  '  +
'     color: rgb(114,126,139)  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_print-margin {  '  +
'     width: 1px;  '  +
'     background: #e8e8e8  '  +
'   }  '  +
'     '  +
'   .ace-red {  '  +
'     background-color: #1A2233;  '  +
'     color: #CAD9E3  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_cursor {  '  +
'     color: #f8f8f0  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_marker-layer .ace_selection {  '  +
'     background: #DE333C  '  +
'   }  '  +
'     '  +
'   .ace-red.ace_multiselect .ace_selection.ace_start {  '  +
'     box-shadow: 0 0 3px 0px #1A2233;  '  +
'     border-radius: 2px  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_marker-layer .ace_step {  '  +
'     background: rgb(198, 219, 174)  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_marker-layer .ace_bracket {  '  +
'     margin: -1px 0 0 -1px;  '  +
'     border: 1px solid #3b3a32  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_marker-layer .ace_active-line {  '  +
'     background: #40484D  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_gutter-active-line {  '  +
'     background-color: #40484D  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_marker-layer .ace_selected-word {  '  +
'     border: 1px solid #DE333C  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_fold {  '  +
'     background-color: #ffffff;  '  +
'     border-color: #CAD9E3  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_keyword {  '  +
'     color: #B0B0B0  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_entity.ace_name.ace_tag,  '  +
'   .ace-red .ace_keyword.ace_other.ace_unit {  '  +
'     color: #DE333C  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_constant.ace_language {  '  +
'     color: #FF0000  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_constant.ace_numeric {  '  +
'     color: #FA8282  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_constant.ace_character,  '  +
'   .ace-red .ace_constant.ace_other {  '  +
'     color: #de333c  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_support.ace_function {  '  +
'     font-style: italic;  '  +
'     color: #DE333C  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_support.ace_constant {  '  +
'     color: #E6B3B3  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_support.ace_constant.ace_property-value {  '  +
'     color: #3790DE  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_support.ace_class,  '  +
'   .ace-red .ace_support.ace_type {  '  +
'     font-style: italic;  '  +
'     color: #D9C3C3  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_storage {  '  +
'     color: #FF4C4C  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_storage.ace_type {  '  +
'     font-style: italic;  '  +
'     color: #de333c  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_invalid {  '  +
'     color: #f8f8f0;  '  +
'     background-color: #F54F4F  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_invalid.ace_deprecated {  '  +
'     color: #f8f8f0;  '  +
'     background-color: #C70000  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_string {  '  +
'     color: #CC7E7E  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_comment {  '  +
'     font-style: italic;  '  +
'     color: #515E66;  '  +
'     background-color: rgba(81, 94, 102, 0.12)  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_variable {  '  +
'     font-style: italic  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_variable.ace_parameter {  '  +
'     font-style: italic;  '  +
'     color: #F5BABA  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_entity.ace_other.ace_attribute-name {  '  +
'     color: #DB7474  '  +
'   }  '  +
'     '  +
'   .ace-red .ace_entity.ace_name.ace_function {  '  +
'     color: #ffffff  '  +
'  }  ' ;

// var dom = acequire("../lib/dom");
var dom = acequire("../../../node_modules/brace/lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
