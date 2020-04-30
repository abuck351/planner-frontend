const colors = [
	"998AD3",
	"E494D3",
	"CDF1AF",
	"87DCC0",
	"88BBE4",
	"F9D494",
	"FCEEC5",
];

export default function randomColor() {
	return `#${colors[Math.floor(Math.random() * colors.length)]}`;
}
