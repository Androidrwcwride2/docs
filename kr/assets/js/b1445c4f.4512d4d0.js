"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||s;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const s={title:"etcd-snapshot"},l="k3s etcd-snapshot",o={unversionedId:"cli/etcd-snapshot",id:"cli/etcd-snapshot",title:"etcd-snapshot",description:"Available as of v1.19.1+k3s1",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/etcd-snapshot.md",sourceDirName:"cli",slug:"/cli/etcd-snapshot",permalink:"/kr/cli/etcd-snapshot",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/etcd-snapshot.md",tags:[],version:"current",lastUpdatedAt:1689803914,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{title:"etcd-snapshot"},sidebar:"mySidebar",previous:{title:"certificate",permalink:"/kr/cli/certificate"},next:{title:"secrets-encrypt",permalink:"/kr/cli/secrets-encrypt"}},i={},p=[{value:"Creating Snapshots",id:"creating-snapshots",level:4},{value:"Restoring a Cluster from a Snapshot",id:"restoring-a-cluster-from-a-snapshot",level:4},{value:"Options",id:"options",level:4},{value:"S3 Compatible API Support",id:"s3-compatible-api-support",level:4},{value:"Etcd Snapshot and Restore Subcommands",id:"etcd-snapshot-and-restore-subcommands",level:4}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("Tabs"),m=d("TabItem"),u={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"k3s-etcd-snapshot"},"k3s etcd-snapshot"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Available as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,r.kt)("p",null,"In this section, you'll learn how to create backups of the K3s embedded etcd datastore, and to restore the cluster from backup."),(0,r.kt)("h4",{id:"creating-snapshots"},"Creating Snapshots"),(0,r.kt)("p",null,"Snapshots are enabled by default, at 00:00 and 12:00 system time, with 5 snapshots retained. To configure the snapshot interval or the number of retained snapshots, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#options"},"options"),"."),(0,r.kt)("p",null,"The snapshot directory defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/snapshots"),". The data-dir value defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s")," and can be changed by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"--data-dir")," flag."),(0,r.kt)("h4",{id:"restoring-a-cluster-from-a-snapshot"},"Restoring a Cluster from a Snapshot"),(0,r.kt)("p",null,"When K3s is restored from backup, the old data directory will be moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/etcd-old/"),". Then K3s will attempt to restore the snapshot by creating a new data directory, then starting etcd with a new K3s cluster with one etcd member."),(0,r.kt)("p",null,"To restore the cluster from backup:"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(m,{value:"Single Server",mdxType:"TabItem"},(0,r.kt)("p",null,"Run K3s with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," option, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset-restore-path")," also given:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," A message in the logs says that K3s can be restarted without the flags. Start k3s again and should run successfully and be restored from the specified snapshot.")),(0,r.kt)(m,{value:"High Availability",mdxType:"TabItem"},(0,r.kt)("p",null,"In this example there are 3 servers, ",(0,r.kt)("inlineCode",{parentName:"p"},"S1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"S2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"S3"),". The snapshot is located on ",(0,r.kt)("inlineCode",{parentName:"p"},"S1"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S1, start K3s with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," option, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset-restore-path")," also given:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Result:")," A message in the logs says that K3s can be restarted without the flags.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S2 and S3, stop K3s. Then delete the data directory, ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/db/"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop k3s\nrm -rf /var/lib/rancher/k3s/server/db/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S1, start K3s again:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start k3s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S2 and S3, start K3s again to join the restored cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start k3s\n")))))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,"These options can be passed in with the command line, or in the ",(0,r.kt)("a",{parentName:"p",href:"/kr/installation/configuration#configuration-file"},"configuration file,")," which may be easier to use."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-disable-snapshots")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable automatic etcd snapshots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-schedule-cron")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Snapshot interval time in cron spec. eg. every 5 hours ",(0,r.kt)("inlineCode",{parentName:"td"},"0 */5 * * *"),"(default: ",(0,r.kt)("inlineCode",{parentName:"td"},"0 */12 * * *"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-retention")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of snapshots to retain (default: 5)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory to save db snapshots. (Default location: ",(0,r.kt)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cluster-reset")),(0,r.kt)("td",{parentName:"tr",align:null},"Forget all peers and become sole member of a new cluster. This can also be set with the environment variable ",(0,r.kt)("inlineCode",{parentName:"td"},"[$K3S_CLUSTER_RESET]"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cluster-reset-restore-path")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to snapshot file to be restored")))),(0,r.kt)("h4",{id:"s3-compatible-api-support"},"S3 Compatible API Support"),(0,r.kt)("p",null,"K3s supports writing etcd snapshots to and restoring etcd snapshots from systems with S3-compatible APIs. S3 support is available for both on-demand and scheduled snapshots."),(0,r.kt)("p",null,"The arguments below have been added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," subcommand. These flags exist for the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," subcommand as well however the ",(0,r.kt)("inlineCode",{parentName:"p"},"--etcd-s3")," portion is removed to avoid redundancy."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable backup to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint-ca")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 custom CA cert to connect to S3 endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-skip-ssl-verify")),(0,r.kt)("td",{parentName:"tr",align:null},"Disables S3 SSL certificate validation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-access-key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-secret-key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-bucket")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 bucket name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-region")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 region / bucket location (optional). defaults to us-east-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-folder")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 folder")))),(0,r.kt)("p",null,"To perform an on-demand etcd snapshot and save it to S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n")),(0,r.kt)("p",null,"To perform an on-demand etcd snapshot restore from S3, first make sure that K3s isn't running. Then run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-init \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n")),(0,r.kt)("h4",{id:"etcd-snapshot-and-restore-subcommands"},"Etcd Snapshot and Restore Subcommands"),(0,r.kt)("p",null,"k3s supports a set of subcommands for working with your etcd snapshots."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subcommand"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete given snapshot(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ls, list, l"),(0,r.kt)("td",{parentName:"tr",align:null},"List snapshots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prune"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove snapshots that exceed the configured retention count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"save"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger an immediate etcd snapshot")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," subcommand is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot"),". The latter will eventually be deprecated in favor of the former.")),(0,r.kt)("p",null,"These commands will perform as expected whether the etcd snapshots are stored locally or in an S3 compatible object store."),(0,r.kt)("p",null,"For additional information on the etcd snapshot subcommands, run ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot"),"."),(0,r.kt)("p",null,"Delete a snapshot from S3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot delete          \\\n  --s3                            \\\n  --s3-bucket=<S3-BUCKET-NAME>    \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY> \\\n  <SNAPSHOT-NAME>\n")),(0,r.kt)("p",null,"Prune local snapshots with the default retention policy (5). The ",(0,r.kt)("inlineCode",{parentName:"p"},"prune")," subcommand takes an additional flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--snapshot-retention")," that allows for overriding the default retention policy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune --snapshot-retention 10\n")))}k.isMDXComponent=!0}}]);