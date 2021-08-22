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

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
    className: "button",
    onClick: addLink
  }, "A\xF1adir nueva cartilla informativa"));
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
    className: "row row-cols-4 info-cards"
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
    className: "button",
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "\xA1Todo lo que debes saber para trabajar dentro y fuera del Per\xFA!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Ent\xE9rate de los beneficios, requisitos y pasos para acceder a ellos, y otra informaci\xF3n de tu inter\xE9s")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row justify-content-center"
  }, links.map(link => {
    var _link$image, _link$image2;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "col-12 col-md-auto"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card align-items-center border-0 presentation__card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "d-block card-img-top presentation__link-image",
      alt: (_link$image = link.image) === null || _link$image === void 0 ? void 0 : _link$image.alt,
      src: (_link$image2 = link.image) === null || _link$image2 === void 0 ? void 0 : _link$image2.url
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card-body text-center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "d-block btn btn-primary button--primary informative-links__button",
      href: link.url
    }, link.label))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoLinksSave);

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