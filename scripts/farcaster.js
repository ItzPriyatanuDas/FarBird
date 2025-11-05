// farcaster.js
import { sdk } from "https://esm.sh/@farcaster/miniapp-sdk";

/**
 * Initialize Farcaster SDK: handles splash screen, user, etc.
 */
export async function initFarcaster() {
  let farcasterUser = null;

  try {
    await sdk.actions.ready(); // ✅ hide splash screen
    const context = await sdk.context;
    farcasterUser = context.user;

    console.log("✅ Farcaster connected:", farcasterUser);
  } catch (error) {
    console.warn("⚠️ Farcaster init failed:", error);
  }

  return farcasterUser;
}

/**
 * Wrapper around sdk.storage
 */
export const farcasterStorage = {
  async get(key, global = false) {
    try {
      const res = await sdk.storage.get(key, global);
      return res?.value || null;
    } catch (e) {
      console.error("Storage get failed", e);
      return null;
    }
  },
  async set(key, value, global = false) {
    try {
      await sdk.storage.set(key, value, global);
    } catch (e) {
      console.error("Storage set failed", e);
    }
  },
  async list(prefix, global = false) {
    try {
      const res = await sdk.storage.list(prefix, global);
      return res?.keys || [];
    } catch (e) {
      console.error("Storage list failed", e);
      return [];
    }
  },
};

/**
 * Optional wallet connect
 */
export async function connectWallet() {
  try {
    const wallet = await sdk.actions.requestWallet();
    console.log("🔗 Wallet connected:", wallet);
    return wallet;
  } catch (err) {
    console.error("Wallet connect failed:", err);
    return null;
  }
}

/**
 * Share a post to Farcaster (Warpcast)
 */
export async function shareToFarcaster(text) {
  try {
    await sdk.actions.openUrl(`https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`);
  } catch (err) {
    console.error("Share failed:", err);
  }
}
