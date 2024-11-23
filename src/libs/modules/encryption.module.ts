import CryptoJs from "crypto-js";

export class Encryption {
	private static readonly key =
		process.env.NEXT_PUBLIC_ENCRYPTION_KEY ||
		"c7abb0e3337675966250a501f6da95e1109a6c459f733ce31e01f4a62cb55219";

	private static readonly iv =
		process.env.NEXT_PUBLIC_ENCRYPTION_KEY ||
		"dd291dd7e9779d327d99d59f6ae40bce";

	static set(data: string) {
		const keyHex = CryptoJs.enc.Hex.parse(this.key);
		const ivHex = CryptoJs.enc.Hex.parse(this.iv);

		const encrypted = CryptoJs.AES.encrypt(data, keyHex, {
			iv: ivHex,
			format: CryptoJs.format.Hex,
		});
		return encrypted.toString();
	}
	static get(data: string) {
		const keyHex = CryptoJs.enc.Hex.parse(this.key);
		const ivHex = CryptoJs.enc.Hex.parse(this.iv);
		const decrypted = CryptoJs.AES.decrypt(data, keyHex, {
			iv: ivHex,
			format: CryptoJs.format.Hex,
		});
		return decrypted.toString(CryptoJs.enc.Utf8);
	}
}
