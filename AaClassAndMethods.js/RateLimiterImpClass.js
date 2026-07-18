class RateLimiter {
    cunstructor(maxReq, ms) {
        this.maxReq = maxReq;
        this.ms = ms;
        this.tenantId = new Map()
    }

    isAllowed(tenantId) { // it is method of class
        const id = new Date()
        if (!this.tenantId.has(tenantId)) {
            this.tenantId.set(tenantId, { count: 1, startTime: id });
            return true;
        }

        const tenant = this.tenantId.get(tenantId);
        if (tenant.count >= this.maxReq) {
            return false;
        }
        this.tenantId.set(tenantId, { count: tenant.count + 1, startTime: tenant.startTime });
        return true;
    }
}


const limiter = new RateLimiter(3, 2 * 60 * 1000); // 3 requests per 2 minutes

console.log(limiter.isAllowed("tenant1")); // true
console.log(limiter.isAllowed("tenant1")); // true
console.log(limiter.isAllowed("tenant1")); // true
console.log(limiter.isAllowed("tenant1")); // false
