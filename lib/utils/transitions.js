'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Transitions = exports.Transitions = {

	// Simple drop down and stick to top 
	// 
	'sticky-top': {
		'.sticky-top-enter': {
			opacity: 0,
			transform: 'translateY(-20vh)'
		},
		'.sticky-top-enter-active': {
			opacity: 1,
			transform: 'translateY(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.sticky-top-enter-leave': {
			opacity: 1,
			transform: 'translateY(0) !important'
		},
		'.sticky-top-leave-active': {
			opacity: 0,
			transform: 'translateY(-20vh)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.sticky-top-appear': {
			opacity: 0,
			transform: 'translateY(-20vh)'
		},
		'.sticky-top-appear-active': {
			opacity: 1,
			transform: 'translateY(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Simple slide up and stick to bottom 
	// 
	'sticky-bottom': {
		'.sticky-bottom-enter': {
			opacity: 0,
			transform: 'translateY(20vh)'
		},
		'.sticky-bottom-enter-active': {
			opacity: 1,
			transform: 'translateY(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.sticky-bottom-enter-leave': {
			opacity: 1,
			transform: 'translateY(0) !important'
		},
		'.sticky-bottom-leave-active': {
			opacity: 0,
			transform: 'translateY(20vh)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.sticky-bottom-appear': {
			opacity: 0,
			transform: 'translateY(20vh)'
		},
		'.sticky-bottom-appear-active': {
			opacity: 1,
			transform: 'translateY(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Simple drop down from top to bottom
	// 
	'drop-down': {
		'.drop-down-enter': {
			opacity: 0,
			transform: 'translateY(-20vh)'
		},
		'.drop-down-enter-active': {
			opacity: 1,
			transform: 'translateY(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.drop-down-enter-leave': {
			opacity: 1,
			transform: 'translateY(0) !important'
		},
		'.drop-down-leave-active': {
			opacity: 0,
			transform: 'translateY(20vh)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.drop-down-appear': {
			opacity: 0,
			transform: 'translateY(-20vh)'
		},
		'.drop-down-appear-active': {
			opacity: 1,
			transform: 'translateY(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Simple slide from left to right
	// 
	'slide-in': {
		'.slide-in-enter': {
			opacity: 0,
			transform: 'translateX(-20vw)'
		},
		'.slide-in-enter-active': {
			opacity: 1,
			transform: 'translateX(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.slide-in-enter-leave': {
			opacity: 1,
			transform: 'translateX(0) !important'
		},
		'.slide-in-leave-active': {
			opacity: 0,
			transform: 'translateX(20vw)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.slide-in-appear': {
			opacity: 0,
			transform: 'translateX(-20vw)'
		},
		'.slide-in-appear-active': {
			opacity: 1,
			transform: 'translateX(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Simple scale from 0 to 1
	// 
	'scale-in': {
		'.scale-in-enter': {
			opacity: 0,
			transform: 'scale(0)'
		},
		'.scale-in-enter-active': {
			opacity: 1,
			transform: 'scale(1)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.scale-in-enter-leave': {
			opacity: 1,
			transform: 'scale(1) !important'
		},
		'.scale-in-leave-active': {
			opacity: 0,
			transform: 'scale(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.scale-in-appear': {
			opacity: 0,
			transform: 'scale(0)'
		},
		'.scale-in-appear-active': {
			opacity: 1,
			transform: 'scale(1)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Simple scale from 2 to 1
	// 
	'scale-out': {
		'.scale-out-enter': {
			opacity: 0,
			transform: 'scale(2)'
		},
		'.scale-out-enter-active': {
			opacity: 1,
			transform: 'scale(1)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.scale-out-enter-leave': {
			opacity: 1,
			transform: 'scale(1) !important'
		},
		'.scale-out-leave-active': {
			opacity: 0,
			transform: 'scale(2)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},
		'.scale-out-appear': {
			opacity: 0,
			transform: 'scale(2)'
		},
		'.scale-out-appear-active': {
			opacity: 1,
			transform: 'scale(1)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Sign Flip on X Axis
	// 
	'sign-flip': {
		'.sign-flip-enter': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transformOrigin: 'top',
			transform: 'rotateX(-90deg)'
		},

		'.sign-flip-enter-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateX(0deg)',
			transformOrigin: 'top',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.sign-flip-leave': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transformOrigin: 'top',
			transform: 'rotateX(0deg)'
		},

		'.sign-flip-leave-active': {
			backfaceVisibility: 'hidden',
			transform: 'rotateX(-90deg)',
			opacity: 0,
			transformOrigin: 'top',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.sign-flip-appear': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transformOrigin: 'top',
			transform: 'rotateX(-90deg)'
		},

		'.sign-flip-appear-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateX(0deg)',
			transformOrigin: 'top',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Flip on X Axis
	// 
	'flipX': {
		'.flipX-enter': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transform: 'rotateX(90deg)'
		},

		'.flipX-enter-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateX(0deg)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.flipX-leave': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateX(0deg)'
		},

		'.flipX-leave-active': {
			backfaceVisibility: 'hidden',
			transform: 'rotateX(90deg)',
			opacity: 0,
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.flipX-appear': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transform: 'rotateX(90deg)'
		},

		'.flipX-appear-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateX(0deg)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Flip on Y Axis
	// 
	'flipY': {
		'.flipY-enter': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transform: 'rotateY(-90deg)'
		},

		'.flipY-enter-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateY(0deg)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.flipY-leave': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateY(0deg)'
		},

		'.flipY-leave-active': {
			backfaceVisibility: 'hidden',
			transform: 'rotateY(-90deg)',
			opacity: 0,
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.flipY-appear': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transform: 'rotateY(-90deg)'
		},

		'.flipY-appear-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateY(0deg)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	},

	// Slide in and rotate (flip) at the same time
	// 
	'slide-and-rotate': {
		'.slide-and-rotate-enter': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transformOrigin: 'left',
			transform: 'rotateY(-90deg) translateX(-50vw)'
		},

		'.slide-and-rotate-enter-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateY(0deg) translateX(0)',
			transformOrigin: 'left',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.slide-and-rotate-leave': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transformOrigin: 'right',
			transform: 'rotateY(0deg) translateX(0)'
		},

		'.slide-and-rotate-leave-active': {
			backfaceVisibility: 'hidden',
			transform: 'rotateY(90deg) translateX(50vw)',
			opacity: 0,
			transformOrigin: 'right',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		},

		'.slide-and-rotate-appear': {
			backfaceVisibility: 'hidden',
			opacity: 0,
			transform: 'rotateY(-90deg) translateX(-20vw)'
		},

		'.slide-and-rotate-appear-active': {
			backfaceVisibility: 'hidden',
			opacity: 1,
			transform: 'rotateY(0deg) translateX(0)',
			transition: 'transform 300ms ease-out, opacity 300ms ease-out !important'
		}
	}
};

exports.default = Transitions;