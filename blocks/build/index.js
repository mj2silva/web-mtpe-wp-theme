/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Collapse1/Collapse1Edit.jsx":
/*!****************************************************!*\
  !*** ./src/components/Collapse1/Collapse1Edit.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

 // import { TextControl } from '@wordpress/components';

const Collapse1Edit = props => {
  const {
    attributes: {
      title,
      description,
      id
    },
    setAttributes
  } = props;

  const onChangeDescription = newDescription => {
    setAttributes({
      title,
      id,
      description: newDescription
    });
  };

  const onChangeTitle = newTitle => {
    setAttributes({
      title: newTitle,
      description,
      id: newTitle.trim().split(' ').join('').toLowerCase()
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wp-block container-fluid with-border"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "col-9"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    class: "subtitle"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    value: title,
    onChange: onChangeTitle,
    placeholder: "T\xEDtulo del grupo"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    value: description,
    onChange: onChangeDescription,
    placeholder: "Breve descripci\xF3n o introducci\xF3n",
    label: "Breve descripci\xF3n o introducci\xF3n"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "col-3 d-flex align-items-center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    class: "button button--tertiary",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapsable",
    "aria-expanded": "true",
    "aria-controls": "collapsable"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "button__text"
  }, "Ver todos"), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "material-icons button__icon button__icon--transform"
  }, "arrow_back_ios_new")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row",
    id: "collapsable"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Collapse1Edit);

/***/ }),

/***/ "./src/components/Collapse1/Collapse1Save.jsx":
/*!****************************************************!*\
  !*** ./src/components/Collapse1/Collapse1Save.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Collapse1Save = props => {
  const {
    attributes: {
      title,
      description,
      id
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "container px-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row g-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "col-9"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    class: "subtitle"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, description)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "col-3 d-flex align-items-center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    class: "button button--tertiary",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapsable" + id,
    "aria-expanded": "false",
    "aria-controls": "collapsable"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "d-none d-md-inline button__text"
  }, "Ver todos", '  '), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "material-icons button__icon button__icon--transform"
  }, "arrow_back_ios_new")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row collapse",
    id: "collapsable" + id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Collapse1Save);

/***/ }),

/***/ "./src/components/Collapse2/Collapse2Edit.jsx":
/*!****************************************************!*\
  !*** ./src/components/Collapse2/Collapse2Edit.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Collapse2Edit = props => {
  const {
    attributes: {
      title,
      icon,
      id
    },
    setAttributes
  } = props;

  const onSelectImage = newImage => {
    setAttributes({
      title,
      icon: newImage,
      id
    });
  };

  const onChangeTitle = newTitle => {
    setAttributes({
      title: newTitle,
      icon,
      id: newTitle.trim().split(' ').join('')
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container-fluid wp-block py-2 collapsable with-border"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row d-flex justify-content-between"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
    className: "js-book-details-image wp-admin-book-details-image",
    allowedTypes: ['image'],
    multiple: false,
    value: (icon === null || icon === void 0 ? void 0 : icon.id) || '',
    addToGallery: true,
    onSelect: onSelectImage,
    render: ({
      open
    }) => icon ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "col-3 px-0 d-flex align-items-center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "d-inline-block collapsable__icon"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: icon.url
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: () => {
        setAttributes({
          title,
          id,
          icon: null
        });
      },
      className: "button button--remove"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "material-icons"
    }, "delete"))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "col-2 d-flex align-items-center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: open,
      className: "button is-small"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "material-icons"
    }, "add")))
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-7"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    className: "collapsable__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    className: "p-2",
    value: title,
    placeholder: "T\xEDtulo del elemento",
    onChange: onChangeTitle
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-2 d-flex align-items-center justify-content-end"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "button collapsable__toggle",
    type: "button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "material-icons button__icon button__icon--transform"
  }, "arrow_back_ios_new")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row collapsable__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Collapse2Edit);

/***/ }),

/***/ "./src/components/Collapse2/Collapse2Save.jsx":
/*!****************************************************!*\
  !*** ./src/components/Collapse2/Collapse2Save.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Collapse2Save = props => {
  const {
    attributes: {
      title,
      icon,
      id
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container px-0 collapsable"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row my-2 d-flex justify-content-between"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-10 p-0 d-flex align-items-center"
  }, icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "d-inline-block collapsable__icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: icon.url,
    alt: icon.alt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    className: "collapsable__title"
  }, title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-1 d-flex align-items-center justify-content-end"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "button collapsable__toggle",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapsable2" + id,
    "aria-expanded": "true",
    "aria-controls": "collapsable"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "material-icons button__icon button__icon--transform"
  }, "arrow_back_ios_new")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row collapse collapsable__content g-0",
    id: "collapsable2" + id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Collapse2Save);

/***/ }),

/***/ "./src/components/Contact/ContactEdit.jsx":
/*!************************************************!*\
  !*** ./src/components/Contact/ContactEdit.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const ContactEdit = props => {
  var _attributes$backgroun, _attributes$backgroun2;

  const {
    attributes,
    setAttributes
  } = props;

  const onSelectImage = image => setAttributes({ ...attributes,
    background: image
  });

  const onChange = name => {
    return value => {
      setAttributes({ ...attributes,
        [name]: value
      });
    };
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "container-fluid m-0 p-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "contactInfo",
    class: "carousel slide contactInfo",
    "data-bs-ride": "carousel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "d-none d-lg-block carousel-inner contactInfo__carousel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "carousel-item active"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "black-gradient"
  }), attributes !== null && attributes !== void 0 && attributes.background ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: (_attributes$backgroun = attributes.background) === null || _attributes$backgroun === void 0 ? void 0 : _attributes$backgroun.url,
    class: "d-md-block w-100",
    alt: attributes.background.alt
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    class: "d-md-block w-100 contactInfo__image",
    src: "",
    alt: "",
    srcset: ""
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row px-0 carousel-caption contactInfo__caption d-flex px-2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    class: "text-start"
  }, "Contacto"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "container py-4 px-5 contactInfo__caption-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
    className: "js-book-details-image wp-admin-book-details-image",
    allowedTypes: ['image'],
    multiple: false,
    value: ((_attributes$backgroun2 = attributes.background) === null || _attributes$backgroun2 === void 0 ? void 0 : _attributes$backgroun2.id) || '',
    addToGallery: true,
    onSelect: onSelectImage,
    render: ({
      open
    }) => {
      var _attributes$backgroun3;

      return attributes.background ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "col-6 px-0 d-flex align-items-center"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "me-3"
      }, "Imagen de fondo:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        class: "d-inline-block w-25"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: (_attributes$backgroun3 = attributes.background) === null || _attributes$backgroun3 === void 0 ? void 0 : _attributes$backgroun3.url
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: () => {
          setAttributes({ ...attributes,
            background: null
          });
        },
        className: "button button--remove"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "material-icons"
      }, "delete"))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "col-6 d-flex align-items-center"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Imagen de fondo:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: open,
        className: "button is-small"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "material-icons"
      }, "add")));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Sede central"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "text-start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    placeholder: "Texto de la sede central",
    value: attributes.address,
    onChange: onChange('address')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "link py-3 contactInfo__link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Ver Mapa ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "contactInfo__link-icon"
  }, ">"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["PlainText"], {
    value: attributes.mapUrl,
    placeholder: "Ingrese la URL del mapa a la ubicaci\xF3n",
    onChange: onChange('mapUrl')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Central telef\xF3nica"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "text-start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    placeholder: "N\xFAmero(s) telef\xF3nicos",
    value: attributes.phone,
    onChange: onChange('phone')
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Horario"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "text-start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    placeholder: "N\xFAmero(s) telef\xF3nicos",
    value: attributes.schedule,
    onChange: onChange('schedule')
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactEdit);

/***/ }),

/***/ "./src/components/Contact/ContactSave.jsx":
/*!************************************************!*\
  !*** ./src/components/Contact/ContactSave.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const ContactSave = props => {
  const {
    attributes: {
      mapUrl,
      background,
      address,
      phone,
      schedule
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "container-fluid m-0 p-0 my-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "contactInfo",
    class: "carousel slide contactInfo",
    "data-bs-ride": "carousel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "d-none d-lg-block carousel-inner contactInfo__carousel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "carousel-item active"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: background.url,
    class: "d-md-block w-100",
    alt: background.alt
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row px-0 carousel-caption contactInfo__caption d-flex px-2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    class: "text-start"
  }, "Contacto"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "container py-4 px-5 contactInfo__caption-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Sede central"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "text-start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: address
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "link py-2 contactInfo__link text-start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: mapUrl,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Ver Mapa ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "contactInfo__link-icon"
  }, ">")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Central telef\xF3nica"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "text-start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: phone
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Horario"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "text-start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: schedule
  }))))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "d-lg-none d-block row px-4 py-3 g-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row px-0 d-flex px-2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    class: "text-center text-lg-start"
  }, "Contacto"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "container py-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Sede central"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: address
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "link py-3 contactInfo__link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "#"
  }, "Ver Mapa ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "contactInfo__link-icon"
  }, ">")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Central telef\xF3nica"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: phone
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "contactInfo__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    class: "h4 text-start"
  }, "Horario"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: schedule
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactSave);

/***/ }),

/***/ "./src/components/Container/ContainerEdit.jsx":
/*!****************************************************!*\
  !*** ./src/components/Container/ContainerEdit.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const ContainerEdit = () => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container with-border wp-block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerEdit);

/***/ }),

/***/ "./src/components/Container/ContainerSave.jsx":
/*!****************************************************!*\
  !*** ./src/components/Container/ContainerSave.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const ContainerSave = () => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerSave);

/***/ }),

/***/ "./src/components/ContainerGray/ContainerGrayEdit.jsx":
/*!************************************************************!*\
  !*** ./src/components/ContainerGray/ContainerGrayEdit.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const ContainerGrayEdit = () => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bg-gray container wp-block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerGrayEdit);

/***/ }),

/***/ "./src/components/ContainerGray/ContainerGraySave.jsx":
/*!************************************************************!*\
  !*** ./src/components/ContainerGray/ContainerGraySave.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const ContainerGraySave = () => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bg-gray container-fluid p-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerGraySave);

/***/ }),

/***/ "./src/components/InfoAssets/InfoAssetInput.jsx":
/*!******************************************************!*\
  !*** ./src/components/InfoAssets/InfoAssetInput.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




const InfoAssetInput = props => {
  var _link$image;

  const {
    link,
    setLink,
    removeLink
  } = props;

  const onChangeUrl = url => {
    setLink({ ...link,
      url
    });
  };

  const onChangeLabel = label => {
    setLink({ ...link,
      label
    });
  };

  const onSelectImage = image => {
    setLink({ ...link,
      image
    });
  };

  const handleRemove = () => {
    removeLink(link);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    className: "js-book-details-image wp-admin-book-details-image",
    allowedTypes: ['image'],
    multiple: false,
    value: ((_link$image = link.image) === null || _link$image === void 0 ? void 0 : _link$image.id) || '',
    addToGallery: true,
    onSelect: onSelectImage,
    render: ({
      open
    }) => link.image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: link.image.url,
      width: link.image.width / 2
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        setLink({ ...link,
          image: null
        });
      },
      className: "button is-small"
    }, "Remove"))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: open,
      className: "button"
    }, "Upload Image")
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    value: link.url,
    name: "url",
    placeholder: "Url",
    onChange: onChangeUrl
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    value: link.label,
    name: "label",
    placeholder: "Texto del enlace",
    onChange: onChangeLabel
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleRemove,
    className: "button is-small"
  }, "Eliminar"));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoAssetInput);

/***/ }),

/***/ "./src/components/InfoAssets/InfoAssetsEdit.jsx":
/*!******************************************************!*\
  !*** ./src/components/InfoAssets/InfoAssetsEdit.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoAssetInput_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoAssetInput.jsx */ "./src/components/InfoAssets/InfoAssetInput.jsx");



const InfoAssetsEdit = props => {
  const {
    attributes: {
      links
    },
    setAttributes
  } = props;

  const addLink = () => {
    setAttributes({
      links: [...links, {
        id: new Date().getTime().toString(),
        image: null,
        url: '',
        label: ''
      }]
    });
  };

  const removeLink = linkToRemove => {
    const newLinks = links.filter(link => {
      return link.id !== linkToRemove.id;
    });
    setAttributes({
      links: newLinks
    });
  };

  const editLink = newLink => {
    const newLinks = links.map(link => {
      return link.id === newLink.id ? newLink : link;
    });
    setAttributes({
      links: newLinks
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, links.map(link => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InfoAssetInput_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: link,
    setLink: editLink,
    removeLink: removeLink
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "button",
    onClick: addLink
  }, "A\xF1adir nueva cartilla informativa"));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoAssetsEdit);

/***/ }),

/***/ "./src/components/InfoAssets/InfoAssetsSave.jsx":
/*!******************************************************!*\
  !*** ./src/components/InfoAssets/InfoAssetsSave.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const InfoAssetsSave = props => {
  const {
    attributes: {
      links
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row row-cols-4 info-cards"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null), links.map(link => {
    var _link$image, _link$image2, _link$label;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card col-12 col-md-auto m-1 info-card p-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row g-0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col p-0 m-0 info-card__flag"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "img-fluid",
      src: (_link$image = link.image) === null || _link$image === void 0 ? void 0 : _link$image.url,
      alt: (_link$image2 = link.image) === null || _link$image2 === void 0 ? void 0 : _link$image2.alt
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col p-1 m-0 d-flex align-items-center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card-body p-0 info-card__body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "info-card__link",
      href: link.url
    }, (_link$label = link.label) === null || _link$label === void 0 ? void 0 : _link$label.toUpperCase())))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoAssetsSave);

/***/ }),

/***/ "./src/components/InfoCards/InfoCardInput.jsx":
/*!****************************************************!*\
  !*** ./src/components/InfoCards/InfoCardInput.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




const InfoCardInput = props => {
  var _link$image;

  const {
    link,
    setLink,
    removeLink
  } = props;

  const onChangeUrl = url => {
    setLink({ ...link,
      url
    });
  };

  const onChangeLabel = label => {
    setLink({ ...link,
      label
    });
  };

  const onSelectImage = image => {
    setLink({ ...link,
      image
    });
  };

  const handleRemove = () => {
    removeLink(link);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    className: "js-book-details-image wp-admin-book-details-image",
    allowedTypes: ['image'],
    multiple: false,
    value: ((_link$image = link.image) === null || _link$image === void 0 ? void 0 : _link$image.id) || '',
    addToGallery: true,
    onSelect: onSelectImage,
    render: ({
      open
    }) => link.image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: link.image.url,
      width: link.image.width / 2
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        setLink({ ...link,
          image: null
        });
      },
      className: "button is-small"
    }, "Remove"))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: open,
      className: "button"
    }, "Upload Image")
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    value: link.url,
    name: "url",
    placeholder: "Url",
    onChange: onChangeUrl
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    value: link.label,
    name: "label",
    placeholder: "Texto del enlace",
    onChange: onChangeLabel
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleRemove,
    className: "button is-small"
  }, "Eliminar"));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoCardInput);

/***/ }),

/***/ "./src/components/InfoCards/InfoCardsEdit.jsx":
/*!****************************************************!*\
  !*** ./src/components/InfoCards/InfoCardsEdit.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoCardInput_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCardInput.jsx */ "./src/components/InfoCards/InfoCardInput.jsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




const InfoCardsEdit = props => {
  const {
    attributes: {
      links
    },
    setAttributes
  } = props;

  const addLink = () => {
    setAttributes({
      links: [...links, {
        id: new Date().getTime().toString(),
        image: null,
        url: '',
        label: ''
      }]
    });
  };

  const removeLink = linkToRemove => {
    const newLinks = links.filter(link => {
      return link.id !== linkToRemove.id;
    });
    setAttributes({
      links: newLinks
    });
  };

  const editLink = newLink => {
    const newLinks = links.map(link => {
      return link.id === newLink.id ? newLink : link;
    });
    setAttributes({
      links: newLinks
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, links.map(link => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InfoCardInput_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: link,
    setLink: editLink,
    removeLink: removeLink
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "button add-new-button",
    onClick: addLink
  }, "A\xF1adir nueva cartilla informativa")));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoCardsEdit);

/***/ }),

/***/ "./src/components/InfoCards/InfoCardsSave.jsx":
/*!****************************************************!*\
  !*** ./src/components/InfoCards/InfoCardsSave.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const InfoCardsSave = props => {
  const {
    attributes: {
      links
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row row-cols-4 info-cards g-0"
  }, links.map(link => {
    var _link$image, _link$image2, _link$label;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card col-12 col-md-auto m-1 info-card p-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row g-0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col p-0 m-0 info-card__flag"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "img-fluid",
      src: (_link$image = link.image) === null || _link$image === void 0 ? void 0 : _link$image.url,
      alt: (_link$image2 = link.image) === null || _link$image2 === void 0 ? void 0 : _link$image2.alt
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col p-1 m-0 d-flex align-items-center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card-body p-0 info-card__body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "info-card__link",
      href: link.url
    }, (_link$label = link.label) === null || _link$label === void 0 ? void 0 : _link$label.toUpperCase())))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoCardsSave);

/***/ }),

/***/ "./src/components/InfoLinks/InfoLinkInput.jsx":
/*!****************************************************!*\
  !*** ./src/components/InfoLinks/InfoLinkInput.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




const InfoLinkInput = props => {
  var _link$image;

  const {
    link,
    setLink,
    removeLink
  } = props;

  const onChangeUrl = url => {
    setLink({ ...link,
      url
    });
  };

  const onChangeLabel = label => {
    setLink({ ...link,
      label
    });
  };

  const onSelectImage = image => {
    setLink({ ...link,
      image
    });
  };

  const handleRemove = () => {
    removeLink(link);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    className: "js-book-details-image wp-admin-book-details-image",
    allowedTypes: ['image'],
    multiple: false,
    value: ((_link$image = link.image) === null || _link$image === void 0 ? void 0 : _link$image.id) || '',
    addToGallery: true,
    onSelect: onSelectImage,
    render: ({
      open
    }) => link.image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: link.image.url,
      width: link.image.width / 2
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        setLink({ ...link,
          image: null
        });
      },
      className: "button is-small"
    }, "Remove")) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: open,
      className: "button"
    }, "Upload Image")
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    value: link.url,
    name: "url",
    placeholder: "Url",
    onChange: onChangeUrl
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    value: link.label,
    name: "label",
    placeholder: "Texto del enlace",
    onChange: onChangeLabel
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleRemove,
    className: "button is-small"
  }, "Eliminar"));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoLinkInput);

/***/ }),

/***/ "./src/components/InfoLinks/InfoLinksEdit.jsx":
/*!****************************************************!*\
  !*** ./src/components/InfoLinks/InfoLinksEdit.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoLinkInput_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoLinkInput.jsx */ "./src/components/InfoLinks/InfoLinkInput.jsx");



const InfoLinksEdit = props => {
  const {
    attributes: {
      links
    },
    setAttributes
  } = props;

  const addLink = () => {
    setAttributes({
      links: [...links, {
        id: new Date().getTime().toString(),
        image: null,
        url: '',
        label: ''
      }]
    });
  };

  const removeLink = linkToRemove => {
    const newLinks = links.filter(link => {
      return link.id !== linkToRemove.id;
    });
    setAttributes({
      links: newLinks
    });
  };

  const editLink = newLink => {
    const newLinks = links.map(link => {
      return link.id === newLink.id ? newLink : link;
    });
    setAttributes({
      links: newLinks
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "\xA1Todo lo que debes saber para trabajar dentro y fuera del Per\xFA!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Ent\xE9rate de los beneficios, requisitos y pasos para acceder a ellos, y otra informaci\xF3n de tu inter\xE9s")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, links.map(link => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InfoLinkInput_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: link,
    setLink: editLink,
    removeLink: removeLink
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "button add-new-button",
    onClick: addLink
  }, "A\xF1adir nuevo link"));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoLinksEdit);

/***/ }),

/***/ "./src/components/InfoLinks/InfoLinksSave.jsx":
/*!****************************************************!*\
  !*** ./src/components/InfoLinks/InfoLinksSave.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const InfoLinksSave = props => {
  const {
    attributes: {
      links
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    class: "container-fluid container--gray  py-5"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "py-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "\xA1Todo lo que debes saber para trabajar dentro y fuera del Per\xFA"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    class: "h5"
  }, "Ent\xE9rate de los beneficios, requisitos y pasos para acceder a ellos, y otra informaci\xF3n de tu inter\xE9s."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "py-5"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "row"
  }, links.map(link => {
    var _link$image, _link$image2;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "col-md-3 col-xs-12"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "card--no-bar"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "icon-container py-4"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      class: "icon card__super-icon",
      src: (_link$image = link.image) === null || _link$image === void 0 ? void 0 : _link$image.url,
      alt: (_link$image2 = link.image) === null || _link$image2 === void 0 ? void 0 : _link$image2.alt
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "{link.url}",
      class: "button--center button--primary"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "text-center text--bold"
    }, link.label))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoLinksSave);

/***/ }),

/***/ "./src/components/Link/MTPELinkEdit.jsx":
/*!**********************************************!*\
  !*** ./src/components/Link/MTPELinkEdit.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

// import { PlainText } from '@wordpress/block-editor';


const MTPELinkEdit = props => {
  const {
    attributes: {
      links,
      style
    },
    setAttributes
  } = props;

  const addLink = () => {
    setAttributes({
      links: [...links, {
        id: new Date().getTime().toString(),
        url: '',
        label: ''
      }],
      style: 'default'
    });
  };

  const removeLink = linkToRemove => {
    const newLinks = links.filter(link => {
      return link.id !== linkToRemove.id;
    });
    setAttributes({
      links: newLinks
    });
  };

  const editLink = newLink => {
    const newLinks = links.map(link => {
      return link.id === newLink.id ? newLink : link;
    });
    setAttributes({
      links: newLinks
    });
  };

  const onChangeStyle = newStyle => {
    setAttributes({
      links,
      style: newStyle
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container with-border"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, links.map(link => {
    const onChangeUrl = url => {
      editLink({ ...link,
        url
      });
    };

    const onChangeLabel = label => {
      editLink({ ...link,
        label
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container m-0 p-0 g-0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row d-flex align-items-center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-4"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: "URL",
      value: link.url,
      placeholder: "URL",
      onChange: onChangeUrl
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-4"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: "Texto de enlace",
      placeholder: "Texto",
      value: link.label,
      onChange: onChangeLabel
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "col-3 col-sm-2 d-flex align-items-center justify-content-center offset-sm-1 button button--remove",
      type: "button",
      onClick: () => removeLink(link)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "material-icons"
    }, "delete")))));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row d-flex align-items-center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Tipo de grupo",
    value: style || 'default',
    options: [{
      label: 'Con viñeta y bordes',
      value: 'border-style'
    }, {
      label: 'Con bordes',
      value: 'border'
    }, {
      label: 'Simple',
      value: 'default'
    }],
    onChange: onChangeStyle
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "col-3 col-sm-2 offset-4 offset-sm-5 d-flex align-items-center justify-content-center button button--small",
    onClick: addLink
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "material-icons"
  }, "add"))));
};

/* harmony default export */ __webpack_exports__["default"] = (MTPELinkEdit);

/***/ }),

/***/ "./src/components/Link/MTPELinkSave.jsx":
/*!**********************************************!*\
  !*** ./src/components/Link/MTPELinkSave.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const MTPELinkSave = props => {
  const {
    attributes: {
      links,
      style
    }
  } = props;

  const groupClassName = (() => {
    if (style === 'border-style') return 'link-group link-group--border';
    if (style === 'border') return 'link-group link-group--border';
    if (style === 'default') return 'link-group';
    return 'link-group';
  })();

  const linkClassName = (() => {
    if (style === 'border-style') return 'list__element-item';
    if (style === 'border') return 'list__element-item list__element-item--no-style';
    if (style === 'default') return 'list__element-item list__element-item--no-style';
    return 'list__element-item list__element-item--no-style';
  })();

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: groupClassName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, links.map(link => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    class: linkClassName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    class: "link text-center",
    href: link.url
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "link__text"
  }, link.label, ' '), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "material-icons link__icon"
  }, "open_in_new"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MTPELinkSave);

/***/ }),

/***/ "./src/components/SocialRights/SocialRightsSave.jsx":
/*!**********************************************************!*\
  !*** ./src/components/SocialRights/SocialRightsSave.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const SocialRightsSave = ({
  socialRights
}) => {
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    id: "derechos-socio-laborales",
    className: "container py-5 p-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "py-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Conoce los Derechos Socio Laborales de los Trabajadores Migrantes"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "h5"
  }, "Los trabajadores migrantes del R\xE9gimen Laboral de la Actividad Privada tienen entre sus principales derechos socio laborales los siguientes:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container container--gray"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "row px-0 py-4"
  }, !socialRights && 'Cargando...', socialRights && socialRights.length === 0 && 'No se han registrado derechos socio laborales', socialRights && socialRights.length > 0 && socialRights.map(socialRight => {
    var _socialRight$title;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-4 d-flex"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      className: "list__element-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "link text-center",
      href: socialRight.link
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "link__text"
    }, (_socialRight$title = socialRight.title) === null || _socialRight$title === void 0 ? void 0 : _socialRight$title.rendered), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "material-icons link__icon"
    }, "open_in_new"))));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col d-flex flex-row-reverse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "button button--secondary",
    style: {
      justifyContent: 'space-between'
    }
  }, "Ver m\xE1s derechos", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    className: "ml-4 button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "26",
    viewBox: "0 0 25 26"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "currentColor",
    d: "M12.5.5l-2.203 2.203 8.719 8.735H0v3.125h19.016l-8.72 8.734L12.5 25.5 25 13z"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialRightsSave);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InfoCards_InfoCardsEdit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/InfoCards/InfoCardsEdit.jsx */ "./src/components/InfoCards/InfoCardsEdit.jsx");
/* harmony import */ var _components_InfoCards_InfoCardsSave_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/InfoCards/InfoCardsSave.jsx */ "./src/components/InfoCards/InfoCardsSave.jsx");
/* harmony import */ var _components_InfoLinks_InfoLinksEdit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InfoLinks/InfoLinksEdit.jsx */ "./src/components/InfoLinks/InfoLinksEdit.jsx");
/* harmony import */ var _components_InfoLinks_InfoLinksSave_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/InfoLinks/InfoLinksSave.jsx */ "./src/components/InfoLinks/InfoLinksSave.jsx");
/* harmony import */ var _components_InfoAssets_InfoAssetsEdit_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/InfoAssets/InfoAssetsEdit.jsx */ "./src/components/InfoAssets/InfoAssetsEdit.jsx");
/* harmony import */ var _components_InfoAssets_InfoAssetsSave_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/InfoAssets/InfoAssetsSave.jsx */ "./src/components/InfoAssets/InfoAssetsSave.jsx");
/* harmony import */ var _components_SocialRights_SocialRightsSave_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SocialRights/SocialRightsSave.jsx */ "./src/components/SocialRights/SocialRightsSave.jsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Link_MTPELinkEdit_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Link/MTPELinkEdit.jsx */ "./src/components/Link/MTPELinkEdit.jsx");
/* harmony import */ var _components_Link_MTPELinkSave_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Link/MTPELinkSave.jsx */ "./src/components/Link/MTPELinkSave.jsx");
/* harmony import */ var _components_Collapse1_Collapse1Edit_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Collapse1/Collapse1Edit.jsx */ "./src/components/Collapse1/Collapse1Edit.jsx");
/* harmony import */ var _components_Collapse1_Collapse1Save_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Collapse1/Collapse1Save.jsx */ "./src/components/Collapse1/Collapse1Save.jsx");
/* harmony import */ var _components_Collapse2_Collapse2Edit_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Collapse2/Collapse2Edit.jsx */ "./src/components/Collapse2/Collapse2Edit.jsx");
/* harmony import */ var _components_Collapse2_Collapse2Save_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Collapse2/Collapse2Save.jsx */ "./src/components/Collapse2/Collapse2Save.jsx");
/* harmony import */ var _components_Contact_ContactEdit_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Contact/ContactEdit.jsx */ "./src/components/Contact/ContactEdit.jsx");
/* harmony import */ var _components_Contact_ContactSave_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Contact/ContactSave.jsx */ "./src/components/Contact/ContactSave.jsx");
/* harmony import */ var _components_ContainerGray_ContainerGrayEdit_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ContainerGray/ContainerGrayEdit.jsx */ "./src/components/ContainerGray/ContainerGrayEdit.jsx");
/* harmony import */ var _components_Container_ContainerEdit_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Container/ContainerEdit.jsx */ "./src/components/Container/ContainerEdit.jsx");
/* harmony import */ var _components_Container_ContainerSave_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Container/ContainerSave.jsx */ "./src/components/Container/ContainerSave.jsx");
/* harmony import */ var _components_ContainerGray_ContainerGraySave_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ContainerGray/ContainerGraySave.jsx */ "./src/components/ContainerGray/ContainerGraySave.jsx");





















Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/info-links', {
  title: 'Links de información',
  description: 'Links a las secciones informativas',
  icon: 'info',
  category: 'layout',
  attributes: {
    links: {
      type: 'array',
      default: [{
        id: new Date().getTime().toString(),
        image: null,
        url: '',
        label: ''
      }]
    }
  },
  edit: _components_InfoLinks_InfoLinksEdit_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _components_InfoLinks_InfoLinksSave_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/info-cards', {
  title: 'Cartillas informativas',
  description: 'Links a las secciones informativas',
  icon: 'info',
  category: 'layout',
  attributes: {
    links: {
      type: 'array',
      default: [{
        id: new Date().getTime().toString(),
        image: null,
        url: '',
        label: ''
      }]
    }
  },
  edit: _components_InfoCards_InfoCardsEdit_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _components_InfoCards_InfoCardsSave_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/info-assets', {
  title: 'Materiales informativos',
  description: 'Lista de materiales informativos para el migrante',
  icon: 'info',
  category: 'layout',
  attributes: {
    links: {
      type: 'array',
      default: [{
        id: new Date().getTime().toString(),
        image: null,
        url: '',
        label: ''
      }]
    }
  },
  edit: _components_InfoAssets_InfoAssetsEdit_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _components_InfoAssets_InfoAssetsSave_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/link', {
  title: 'MTPE Link',
  description: 'Link con estilos de la web del MTPE',
  icon: 'external',
  category: 'layout',
  attributes: {
    links: {
      type: 'array',
      default: [{
        id: new Date().getTime().toString(),
        style: 'default',
        url: '',
        label: ''
      }]
    }
  },
  edit: _components_Link_MTPELinkEdit_jsx__WEBPACK_IMPORTED_MODULE_9__["default"],
  save: _components_Link_MTPELinkSave_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/social-rights-widget', {
  apiVersion: 2,
  title: 'Derechos socio laborales - Enlaces',
  description: 'Lista de los distintos derechos socio-laborales y sus enlaces',
  icon: 'megaphone',
  category: 'widgets',
  edit: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(select => {
    return {
      socialRights: select('core').getEntityRecords('postType', 'derecho')
    };
  })(_components_SocialRights_SocialRightsSave_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/collapse-element-1', {
  apiVersion: 2,
  title: 'Elementos colapsables estilo 1',
  description: 'Elementos colapsables con título y descripción',
  icon: 'arrow-down-alt2',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    description: {
      type: 'string',
      default: ''
    },
    id: {
      type: 'string',
      default: ''
    }
  },
  edit: _components_Collapse1_Collapse1Edit_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],
  save: _components_Collapse1_Collapse1Save_jsx__WEBPACK_IMPORTED_MODULE_12__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/collapse-element-2', {
  apiVersion: 2,
  title: 'Elementos colapsables estilo 2',
  description: 'Elementos colapsables con título e ícono',
  icon: 'arrow-down-alt2',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    icon: {
      type: 'object',
      default: null
    },
    id: {
      type: 'string',
      default: (new Date().getTime() * Math.floor(Math.random() * 1000)).toString(16)
    }
  },
  edit: _components_Collapse2_Collapse2Edit_jsx__WEBPACK_IMPORTED_MODULE_13__["default"],
  save: _components_Collapse2_Collapse2Save_jsx__WEBPACK_IMPORTED_MODULE_14__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/contact-info', {
  apiVersion: 2,
  title: 'Información de contacto',
  description: 'Bloque de información de contacto predeterminada para el mtpe',
  icon: 'phone',
  category: 'layout',
  attributes: {
    address: {
      type: 'string',
      default: ''
    },
    mapUrl: {
      type: 'string',
      default: ''
    },
    phone: {
      type: 'string',
      default: ''
    },
    schedule: {
      type: 'string',
      default: ''
    },
    background: {
      type: 'object',
      default: null
    }
  },
  edit: _components_Contact_ContactEdit_jsx__WEBPACK_IMPORTED_MODULE_15__["default"],
  save: _components_Contact_ContactSave_jsx__WEBPACK_IMPORTED_MODULE_16__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/container', {
  apiVersion: 2,
  title: 'Contenedor',
  description: 'Contenedor simple para un bloque o bloques de la página',
  icon: 'align-wide',
  category: 'layout',
  attributes: {},
  edit: _components_Container_ContainerEdit_jsx__WEBPACK_IMPORTED_MODULE_18__["default"],
  save: _components_Container_ContainerSave_jsx__WEBPACK_IMPORTED_MODULE_19__["default"]
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mtpe/container-gray', {
  apiVersion: 2,
  title: 'Contenedor gris',
  description: 'Uso para crear contenedores con fondo gris claro',
  icon: 'align-wide',
  category: 'layout',
  attributes: {},
  edit: _components_ContainerGray_ContainerGrayEdit_jsx__WEBPACK_IMPORTED_MODULE_17__["default"],
  save: _components_ContainerGray_ContainerGraySave_jsx__WEBPACK_IMPORTED_MODULE_20__["default"]
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map