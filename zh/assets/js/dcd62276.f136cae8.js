"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8855],{159:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(5893),t=s(1151);const a={title:"Managing Packaged Components",weight:60},o=void 0,r={id:"installation/packaged-components",title:"Managing Packaged Components",description:"Auto-Deploying Manifests (AddOns)",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/packaged-components.md",sourceDirName:"installation",slug:"/installation/packaged-components",permalink:"/zh/installation/packaged-components",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/packaged-components.md",tags:[],version:"current",lastUpdatedAt:171268382e4,frontMatter:{title:"Managing Packaged Components",weight:60},sidebar:"mySidebar",previous:{title:"Managing Server Roles",permalink:"/zh/installation/server-roles"},next:{title:"Uninstalling K3s",permalink:"/zh/installation/uninstall"}},d={},l=[{value:"Auto-Deploying Manifests (AddOns)",id:"auto-deploying-manifests-addons",level:2},{value:"Packaged Components",id:"packaged-components",level:3},{value:"User AddOns",id:"user-addons",level:3},{value:"File Naming Requirements",id:"file-naming-requirements",level:4},{value:"Disabling Manifests",id:"disabling-manifests",level:2},{value:"Using the <code>--disable</code> flag",id:"using-the---disable-flag",level:3},{value:"Using .skip files",id:"using-skip-files",level:3},{value:"Helm AddOns",id:"helm-addons",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"auto-deploying-manifests-addons",children:"Auto-Deploying Manifests (AddOns)"}),"\n",(0,i.jsxs)(n.p,{children:["On server nodes, any file found in ",(0,i.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/manifests"})," will automatically be deployed to Kubernetes in a manner similar to ",(0,i.jsx)(n.code,{children:"kubectl apply"}),", both on startup and when the file is changed on disk. Deleting files out of this directory will not delete the corresponding resources from the cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["Manifests are tracked as ",(0,i.jsx)(n.code,{children:"AddOn"})," custom resources in the ",(0,i.jsx)(n.code,{children:"kube-system"})," namespace. Any errors or warnings encountered when applying the manifest file may seen by using ",(0,i.jsx)(n.code,{children:"kubectl describe"})," on the corresponding ",(0,i.jsx)(n.code,{children:"AddOn"}),", or by using ",(0,i.jsx)(n.code,{children:"kubectl get event -n kube-system"})," to view all events for that namespace, including those from the deploy controller."]}),"\n",(0,i.jsx)(n.h3,{id:"packaged-components",children:"Packaged Components"}),"\n",(0,i.jsxs)(n.p,{children:["K3s comes with a number of packaged components that are deployed as AddOns via the manifests directory: ",(0,i.jsx)(n.code,{children:"coredns"}),", ",(0,i.jsx)(n.code,{children:"traefik"}),", ",(0,i.jsx)(n.code,{children:"local-storage"}),", and ",(0,i.jsx)(n.code,{children:"metrics-server"}),". The embedded ",(0,i.jsx)(n.code,{children:"servicelb"})," LoadBalancer controller does not have a manifest file, but can be disabled as if it were an ",(0,i.jsx)(n.code,{children:"AddOn"})," for historical reasons."]}),"\n",(0,i.jsx)(n.p,{children:"Manifests for packaged components are managed by K3s, and should not be altered. The files are re-written to disk whenever K3s is started, in order to ensure their integrity."}),"\n",(0,i.jsx)(n.h3,{id:"user-addons",children:"User AddOns"}),"\n",(0,i.jsxs)(n.p,{children:["You may place additional files in the manifests directory for deployment as an ",(0,i.jsx)(n.code,{children:"AddOn"}),". Each file may contain multiple Kubernetes resources, delmited by the ",(0,i.jsx)(n.code,{children:"---"})," YAML document separator. For more information on organizing resources in manifests, see the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/",children:"Managing Resources"})," section of the Kubernetes documentation."]}),"\n",(0,i.jsx)(n.h4,{id:"file-naming-requirements",children:"File Naming Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddOn"})," name for each file in the manifest directory is derived from the file basename.\nEnsure that all files within the manifests directory (or within any subdirectories) have names that are unique, and adhere to Kubernetes ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",children:"object naming restrictions"}),".\nCare should also be taken not to conflict with names in use by the default K3s packaged components, even if those components are disabled."]}),"\n",(0,i.jsx)(n.p,{children:"Here is en example of an error that would be reported if the file name contains underscores:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Failed to process config: failed to process /var/lib/rancher/k3s/server/manifests/example_manifest.yaml:    Addon.k3s.cattle.io \"example_manifest\" is invalid: metadata.name: Invalid value: \"example_manifest\":     a lowercase RFC 1123 subdomain must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character    (e.g. 'example.com', regex used for validation is '[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*')"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"If you have multiple server nodes, and place additional AddOn manifests on more than one server, it is your responsibility to ensure that files stay in sync across those nodes. K3s does not sync AddOn content between nodes, and cannot guarantee correct behavior if different servers attempt to deploy conflicting manifests."})}),"\n",(0,i.jsx)(n.h2,{id:"disabling-manifests",children:"Disabling Manifests"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to disable deployment of specific content from the manifests directory."}),"\n",(0,i.jsxs)(n.h3,{id:"using-the---disable-flag",children:["Using the ",(0,i.jsx)(n.code,{children:"--disable"})," flag"]}),"\n",(0,i.jsxs)(n.p,{children:["The AddOns for packaged components listed above, in addition to AddOns for any additional manifests placed in the ",(0,i.jsx)(n.code,{children:"manifests"})," directory, can be disabled with the ",(0,i.jsx)(n.code,{children:"--disable"})," flag. Disabled AddOns are actively uninstalled from the cluster, and the source files deleted from the ",(0,i.jsx)(n.code,{children:"manifests"})," directory."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, to disable traefik from being installed on a new cluster, or to uninstall it and remove the manifest from an existing cluster, you can start K3s with ",(0,i.jsx)(n.code,{children:"--disable=traefik"}),". Multiple items can be disabled by separating their names with commas, or by repeating the flag."]}),"\n",(0,i.jsx)(n.h3,{id:"using-skip-files",children:"Using .skip files"}),"\n",(0,i.jsxs)(n.p,{children:["For any file under ",(0,i.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/manifests"}),", you can create a ",(0,i.jsx)(n.code,{children:".skip"})," file which will cause K3s to ignore the corresponding manifest. The contents of the ",(0,i.jsx)(n.code,{children:".skip"})," file do not matter, only its existence is checked. Note that creating a ",(0,i.jsx)(n.code,{children:".skip"})," file after an AddOn has already been created will not remove or otherwise modify it or the resources it created; the file is simply treated as if it did not exist."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, creating an empty ",(0,i.jsx)(n.code,{children:"traefik.yaml.skip"})," file in the manifests directory before K3s is started the first time, will cause K3s to skip deploying ",(0,i.jsx)(n.code,{children:"traefik.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ ls /var/lib/rancher/k3s/server/manifests\nccm.yaml      local-storage.yaml  rolebindings.yaml  traefik.yaml.skip\ncoredns.yaml  traefik.yaml\n\n$ kubectl get pods -A\nNAMESPACE     NAME                                     READY   STATUS    RESTARTS   AGE\nkube-system   local-path-provisioner-64ffb68fd-xx98j   1/1     Running   0          74s\nkube-system   metrics-server-5489f84d5d-7zwkt          1/1     Running   0          74s\nkube-system   coredns-85cb69466-vcq7j                  1/1     Running   0          74s\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If Traefik had already been deployed prior to creating the ",(0,i.jsx)(n.code,{children:"traefik.skip"})," file, Traefik would stay as-is, and would not be affected by future updates when K3s is upgraded."]}),"\n",(0,i.jsx)(n.h2,{id:"helm-addons",children:"Helm AddOns"}),"\n",(0,i.jsxs)(n.p,{children:["For information about managing Helm charts via auto-deploying manifests, refer to the section about ",(0,i.jsx)(n.a,{href:"/zh/helm",children:"Helm."})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(7294);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);