
let generate = () => {
    let ret    = {};
    
    ret['network'] = { varsion:2 };
    
    
    if (false === ethchk.value()) {
        /* generate ethernet config */
        ret.network['ethernets'] = {};
        ret.network['ethernets'][ifname.value()] = {};
        if (0 === addrtype.value()) {
            /* dhcp */
            ret.network['ethernets'][ifname.value()] = {
                dhcp4: true,
                dhcp6: true
            }
        } else {
            /* manual */
            let set_addr = '[' + addr.toString() + subnet.valueText() + ']';
            ret.network['ethernets'][ifname.value()] = {
                addresses: set_addr,
                gateway4: gateway.toString(),
                nameservers: {
                    addresses: "[" + namesrv.toString() + "]"
                }
            }
        }
    }
    
    if (false === wifichk.value()) {
        /* generate wifi config */
        ret.network['wifis'] = {};
        ret.network.wifis[w_ifname.value()] = {
            dhcp4: true,
            dhcp6: true,
            'access-points': {}
        };
        ret.network.wifis[w_ifname.value()]["access-points"]['"' + ssid.value() + '"'];
        ret.network.wifis[w_ifname.value()]["access-points"]['"' + ssid.value() + '"'] = {
            password: '"'+ passwd.value() +'"'
        };
    }
    retcode.text(conv2yml(ret,0));
}

let conv2yml = (prm,itd) => {
    try {
        let ret = "";
	for (let pidx in prm) {
	    for (let tidx=0; tidx < itd; tidx++) {
                ret += "\t";
	    }
            ret += pidx + ":";
	    if ('object' === typeof prm[pidx]) {
                ret += "\n" + conv2yml(prm[pidx],itd+1);
	    } else {
                ret += prm[pidx] + "\n";
	    }
	}
	return ret;
    } catch (e) {
        console.error(e.stack);
	throw e;
    }
}

