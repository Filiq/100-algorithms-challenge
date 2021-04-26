function domainType(domains: string[]): string[] {
    let domainNames = [];
    
    domains.forEach(domain => {
        domainNames.push(domain.split(".")[domain.split(".").length - 1]);
    })

    domainNames.map((name, index) => {
        name === "org" ? domainNames[index] = "organization" : name === "com" ? domainNames[index] = "commercial" : name === "net" ? domainNames[index] = "network" : domainNames[index] = "information"
    })

    return domainNames;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));