////////////////////
//////McButton//////
////////////////////

const { NodeNextRequest } = require("next/dist/server/base-http/node");
const { isAbsoluteUrl } = require("next/dist/shared/lib/utils");

const mcButton = {
  start: {
    opacity: 0,
    zIndex: 2,
    transition: {
      when: "beforeChildren",
    }
  },
  animate: {
    opacity: 1,
    zIndex: 2
  },
  exit: {
    opacity: 0,
    zIndex: 2,
    transition: {
      when: "afterChildren",
    }
  }
}

const mcTop = {
  opened: {
    start: {
      rotate: 0,
    },
    animate: {
      rotate: 45,
      transition: {
        delay: .3,
      }
    },
    exit: {
      rotate: 0,
    }
  },
  closed: {
    start: {
      marginTop: '25px',
    },
    animate: {
      marginTop: '0px',
      transition: {
        delay: .3,
      }
    },
    exit: {
      marginTop: '25px',
    }
  },
};

const mcMiddle = {
  opened: {
    start: {
      opacity: 0,
    },
    animate: {
      opacity: 0,
    },
    exit: {
     display: 'none',
      
    }
  },
  closed: {
    start: {
      display: 'none',
    },
    animate: {
      display: 'block',
    },
    exit: {
      display: 'none',
    }
  }
};

const mcBottom = {
  opened: {
    start: {
      rotate: 0,
    },
    animate: {
      rotate: -45,
      transition: {
        delay: .5,
      }
    },
    exit: {
      rotate: 0,
    }
  },

  closed: {
    start: {
      marginTop: '25px',
    },
    animate: {
      marginTop: '50px',
      transition: {
        delay: .5,
      }
    },
    exit: {
      marginTop: '25px',
    }
  },
};

////////////////////
////////Menu////////
////////////////////

const menuVariants = {
  hidden: {
    opacity: 0,
  },
  visable: {
    opacity: 1,
    transition: {
      duration: .8,
    }
  },
  exit: {
    opacity:0,
    duration: .8,
  }
}

////////////////////
//////Services//////
////////////////////

const serviceVariants = {
  showInfo: {
    enter: {
      
    },

    animate: {
      // position: 'absoulte',
      // gridArea:'1 / 1 / -1 / -1',
      width: '97%',
      height: '100%',
      zIndex: 1,
      transition: {
        duration: .5,
      }
    },

    exit: {
      display: 'none',
      transition: {
        duration: .5,
      }
    },
  },

  hideInfo: {
    enter: {},

    animate: {},

    exit: {},
  }
}



module.exports = {
  mcTop,
  mcMiddle,
  mcBottom,
  menuVariants,
  serviceVariants,
};