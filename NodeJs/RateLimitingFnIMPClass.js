class RateLimiter {
    constructor(maxRequests, windowMs) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.tenants = new Map();
    }

    isAllowed(tenantId) {
        const now = Date.now();

        if (!this.tenants.has(tenantId)) {
            this.tenants.set(tenantId, { count: 1, startTime: now });
            return true;
        }

        const tenantData = this.tenants.get(tenantId);

        // Check if window expired
        if (now - tenantData.startTime > this.windowMs) {
            this.tenants.set(tenantId, { count: 1, startTime: now });
            return true;
        }

        // If within window
        if (tenantData.count < this.maxRequests) {
            tenantData.count++;
            return true;
        }

        return false; // limit exceeded
    }
}


const limiter = new RateLimiter(3, 2 * 60 * 1000); // 3 requests per 2 minutes

console.log(limiter.isAllowed("tenant1")); // true
console.log(limiter.isAllowed("tenant1")); // true
console.log(limiter.isAllowed("tenant1")); // true
console.log(limiter.isAllowed("tenant1")); // false
