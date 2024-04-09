"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1385],{4031:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var t=n(5893),r=n(1151);const d={title:"\ud5ec\ub984(Helm)",weight:42},c=void 0,i={id:"helm",title:"\ud5ec\ub984(Helm)",description:"\ud5ec\ub984(Helm)\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc704\ud55c \ud328\ud0a4\uc9c0 \uad00\ub9ac \ub3c4\uad6c\uc785\ub2c8\ub2e4. \ud5ec\ub984 \ucc28\ud2b8\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 YAML \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ubb38\uc11c\ub97c \uc704\ud55c \ud15c\ud50c\ub9bf \uad6c\ubb38\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uac1c\ubc1c\uc790 \ub610\ub294 \ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac\uc790\ub294 \ud5ec\ub984\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc815\uc801 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\ub9cc \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0 \ucc28\ud2b8\ub77c\ub294 \uad6c\uc131 \uac00\ub2a5\ud55c \ud15c\ud50c\ub9bf\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4. \uc790\uc2e0\ub9cc\uc758 \ucc28\ud2b8 \uce74\ud0c8\ub85c\uadf8 \uc0dd\uc131\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 https://helm.sh/docs/intro/quickstart/\uc5d0\uc11c \ubb38\uc11c\ub97c \ud655\uc778\ud558\uc138\uc694.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/helm.md",sourceDirName:".",slug:"/helm",permalink:"/kr/helm",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/helm.md",tags:[],version:"current",lastUpdatedAt:171268382e4,frontMatter:{title:"\ud5ec\ub984(Helm)",weight:42},sidebar:"mySidebar",previous:{title:"Networking Services",permalink:"/kr/networking/networking-services"},next:{title:"\uace0\uae09 \uc635\uc158 / \uc124\uc815",permalink:"/kr/advanced"}},l={},h=[{value:"\ud5ec\ub984 \ucee8\ud2b8\ub864\ub7ec \uc0ac\uc6a9\ud558\uae30",id:"\ud5ec\ub984-\ucee8\ud2b8\ub864\ub7ec-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"HelmChart \ud544\ub4dc \uc815\uc758",id:"helmchart-\ud544\ub4dc-\uc815\uc758",level:4},{value:"HelmChartConfig\ub85c \ud328\ud0a4\uc9c0 \ucef4\ud3ec\ub10c\ud2b8 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\ud558\uae30",id:"helmchartconfig\ub85c-\ud328\ud0a4\uc9c0-\ucef4\ud3ec\ub10c\ud2b8-\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\ud558\uae30",level:3},{value:"\ud5ec\ub984 \ubc84\uc804 2\uc5d0\uc11c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",id:"\ud5ec\ub984-\ubc84\uc804-2\uc5d0\uc11c-\ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\ud5ec\ub984(Helm)\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc704\ud55c \ud328\ud0a4\uc9c0 \uad00\ub9ac \ub3c4\uad6c\uc785\ub2c8\ub2e4. \ud5ec\ub984 \ucc28\ud2b8\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 YAML \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ubb38\uc11c\ub97c \uc704\ud55c \ud15c\ud50c\ub9bf \uad6c\ubb38\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uac1c\ubc1c\uc790 \ub610\ub294 \ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac\uc790\ub294 \ud5ec\ub984\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc815\uc801 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\ub9cc \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0 \ucc28\ud2b8\ub77c\ub294 \uad6c\uc131 \uac00\ub2a5\ud55c \ud15c\ud50c\ub9bf\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4. \uc790\uc2e0\ub9cc\uc758 \ucc28\ud2b8 \uce74\ud0c8\ub85c\uadf8 \uc0dd\uc131\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)(s.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"https://helm.sh/docs/intro/quickstart/"}),"\uc5d0\uc11c \ubb38\uc11c\ub97c \ud655\uc778\ud558\uc138\uc694."]}),"\n",(0,t.jsxs)(s.p,{children:["K3s\ub294 \ud5ec\ub984\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud55c \ubcc4\ub3c4\uc758 \uad6c\uc131\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, ",(0,t.jsx)(s.a,{href:"/kr/cluster-access",children:"\ud074\ub7ec\uc2a4\ud130 \uc561\uc138\uc2a4"})," \ubb38\uc11c\uc5d0 \ub530\ub77c kubeconfig \uacbd\ub85c\ub97c \uc62c\ubc14\ub974\uac8c \uc124\uc815\ud588\ub294\uc9c0 \ud655\uc778\ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(s.p,{children:["K3s\uc5d0\ub294 \ud5ec\ub984 \ucc28\ud2b8\uc758 \uc124\uce58, \uc5c5\uadf8\ub808\uc774\ub4dc/\uc7ac\uad6c\uc131 \ubc0f \uc81c\uac70\ub97c \uad00\ub9ac\ud558\ub294 ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/",children:"Helm Controller"}),"\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\uba70, \ud5ec\ub984 \ucc28\ud2b8 \ucee4\uc2a4\ud140 \ub9ac\uc18c\uc2a4 \uc815\uc758(CRD)\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud5ec\ub984 \ucc28\ud2b8\ub97c \uc124\uce58, \uc5c5\uadf8\ub808\uc774\ub4dc/\uc7ac\uad6c\uc131 \ubc0f \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc560\ub4dc\uc628 \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \uc790\ub3d9 \ubc30\ud3ec](./installation/packaged-components.md)\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uba74 \ub514\uc2a4\ud06c\uc5d0 \ub2e8\uc77c \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\uc5d0 \ud5ec\ub984 \ucc28\ud2b8\ub97c \uc124\uce58\ud558\ub294 \uac83\uc744 \uc790\ub3d9\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(s.h3,{id:"\ud5ec\ub984-\ucee8\ud2b8\ub864\ub7ec-\uc0ac\uc6a9\ud558\uae30",children:"\ud5ec\ub984 \ucee8\ud2b8\ub864\ub7ec \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller#helm-controller",children:"\ud5ec\ub984 \ucc28\ud2b8 \ucee4\uc2a4\ud140 \ub9ac\uc18c\uc2a4"}),"\ub294 \uc77c\ubc18\uc801\uc73c\ub85c ",(0,t.jsx)(s.code,{children:"helm"})," \uba85\ub839\uc904 \ub3c4\uad6c\uc5d0 \uc804\ub2ec\ud560 \ub300\ubd80\ubd84\uc758 \uc635\uc158\uc744 \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 Bitnami \ucc28\ud2b8 \uc800\uc7a5\uc18c\uc5d0\uc11c \uc544\ud30c\uce58\ub97c \ubc30\ud3ec\ud558\uc5ec \uae30\ubcf8 \ucc28\ud2b8 \uac12 \uc911 \uc77c\ubd80\ub97c \uc7ac\uc815\uc758\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4. HelmChart \ub9ac\uc18c\uc2a4 \uc790\uccb4\ub294 ",(0,t.jsx)(s.code,{children:"kube-system"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc788\uc9c0\ub9cc, \ucc28\ud2b8\uc758 \ub9ac\uc18c\uc2a4\ub294 \ub3d9\uc77c\ud55c \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0 \uc0dd\uc131\ub418\ub294 ",(0,t.jsx)(s.code,{children:"web"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \ubc30\ud3ec\ub41c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694. \uc774\ub294 HelmChart \ub9ac\uc18c\uc2a4\ub97c \ubc30\ud3ec\ud558\ub294 \ub9ac\uc18c\uc2a4\uc640 \ubd84\ub9ac\ud558\uc5ec \uc720\uc9c0\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: web\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: apache\n  namespace: kube-system\nspec:\n  repo: https://charts.bitnami.com/bitnami\n  chart: apache\n  targetNamespace: web\n  valuesContent: |-\n    service:\n      type: ClusterIP\n    ingress:\n      enabled: true\n      hostname: www.example.com\n    metrics:\n      enabled: true\n"})}),"\n",(0,t.jsx)(s.h4,{id:"helmchart-\ud544\ub4dc-\uc815\uc758",children:"HelmChart \ud544\ub4dc \uc815\uc758"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\ud544\ub4dc"}),(0,t.jsx)(s.th,{children:"\uae30\ubcf8\uac12"}),(0,t.jsx)(s.th,{children:"\uc124\uba85"}),(0,t.jsx)(s.th,{children:"\ud5ec\ub984 \uc778\uc218 / \ud50c\ub798\uadf8 \uc0c1\uc751\uac12"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"metadata.name"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\ud5ec\ub984 \ucc28\ud2b8 \uc774\ub984"}),(0,t.jsx)(s.td,{children:"NAME"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.chart"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \uc788\ub294 \ud5ec\ub984 \ucc28\ud2b8 \uc774\ub984 \ub610\ub294 \ucc28\ud2b8 \uc544\uce74\uc774\ube0c(.tgz)\uc5d0 \ub300\ud55c \uc804\uccb4 HTTPS URL"}),(0,t.jsx)(s.td,{children:"CHART"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.targetNamespace"}),(0,t.jsx)(s.td,{children:"default"}),(0,t.jsx)(s.td,{children:"\ud5ec\ub984 \ucc28\ud2b8 \ub300\uc0c1 \ub124\uc784\uc2a4\ud398\uc774\uc2a4"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"--namespace"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.version"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\ud5ec\ub984 \ucc28\ud2b8 \ubc84\uc804(\ub9ac\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0\uc11c \uc124\uce58\ud558\ub294 \uacbd\uc6b0)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"--version"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.repo"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\ud5ec\ub984 \ucc28\ud2b8 \ub9ac\ud3ec\uc9c0\ud1a0\ub9ac URL"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"--repo"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.repoCA"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"HTTPS \uc0ac\uc6a9 \uc11c\ubc84\uc758 \uc778\uc99d\uc11c\ub97c \uc9c0\uc815"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"--ca-file"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.helmVersion"}),(0,t.jsx)(s.td,{children:"v3"}),(0,t.jsxs)(s.td,{children:["\uc0ac\uc6a9\ud560 \ud5ec\ub984 \ubc84\uc804 (",(0,t.jsx)(s.code,{children:"v2"})," \ud639\uc740 ",(0,t.jsx)(s.code,{children:"v3"}),")"]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.bootstrap"}),(0,t.jsx)(s.td,{children:"False"}),(0,t.jsx)(s.td,{children:"\ud074\ub7ec\uc2a4\ud130(\ud074\ub77c\uc6b0\ub4dc \ucee8\ud2b8\ub864\ub7ec \uad00\ub9ac\uc790 \ub4f1)\ub97c \ubd80\ud2b8\uc2a4\ud2b8\ub7a9\ud558\ub294 \ub370 \uc774 \ucc28\ud2b8\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 True\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.set"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\uac04\ub2e8\ud55c \uae30\ubcf8 \ucc28\ud2b8 \uac12\uc744 \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4. \uac12\uc744 \ud1b5\ud574 \uc124\uc815\ub41c \uc635\uc158\ubcf4\ub2e4 \uc6b0\uc120\ud569\ub2c8\ub2e4."}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"--set"})," / ",(0,t.jsx)(s.code,{children:"--set-string"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.jobImage"}),(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:["\ud5ec\ub984 \ucc28\ud2b8\ub97c \uc124\uce58\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc608\uc2dc. rancher/klipper-helm",":v0",".3.0 ."]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.timeout"}),(0,t.jsx)(s.td,{children:"300"}),(0,t.jsx)(s.td,{children:"\ud5ec\ub984 \uc791\uc5c5 \uc2dc\uac04 \ucd08\uacfc(\ucd08)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"--timeout"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.failurePolicy"}),(0,t.jsx)(s.td,{children:"reinstall"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"abort"}),"\ub85c \uc124\uc815\ud558\uba74 \ud5ec\ub984 \uc791\uc5c5\uc774 \uc911\ub2e8\ub418\uace0 \uc6b4\uc601\uc790\uc758 \uc218\ub3d9 \uac1c\uc785\uc774 \uc788\uc744 \ub54c\uae4c\uc9c0 \uc911\ub2e8\ub41c\ub2e4."]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.valuesContent"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"YAML \ud30c\uc77c \ucf58\ud150\uce20\ub97c \ud1b5\ud574 \ubcf5\uc7a1\ud55c \uae30\ubcf8 \ucc28\ud2b8 \uac12 \uc7ac\uc815\uc758"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"--values"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"spec.chartContent"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Base64\ub85c \uc778\ucf54\ub529\ub41c \ucc28\ud2b8 \uc544\uce74\uc774\ube0c .tgz - spec.chart\ub97c \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4."}),(0,t.jsx)(s.td,{children:"CHART"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/static/"}),"\uc5d0 \uc704\uce58\ud55c \ucf58\ud150\uce20\ub294 \ud074\ub7ec\uc2a4\ud130 \ub0b4\uc5d0\uc11c \ucfe0\ubc84\ub124\ud2f0\uc2a4 APIServer\ub97c \ud1b5\ud574 \uc775\uba85\uc73c\ub85c \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 URL\uc740 ",(0,t.jsx)(s.code,{children:"spec.chart"})," \ud544\ub4dc\uc5d0 \uc788\ub294 \ud2b9\uc218 \ubcc0\uc218 ",(0,t.jsx)(s.code,{children:"%{KUBERNETES_API}%"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud15c\ud50c\ub9bf\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud328\ud0a4\uc9c0\ud654\ub41c Traefik \ucef4\ud3ec\ub10c\ud2b8\ub294 ",(0,t.jsx)(s.code,{children:"https://%{KUBERNETES_API}%/static/charts/traefik-12.0.000.tgz"}),"\uc5d0\uc11c \ud574\ub2f9 \ucc28\ud2b8\ub97c \ub85c\ub4dc\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"name"})," \ud544\ub4dc\ub294 \ud5ec\ub984 \ucc28\ud2b8 \uba85\uba85 \uaddc\uce59\uc744 \ub530\ub77c\uc57c \ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)(s.a,{href:"https://helm.sh/docs/chart_best_practices/conventions/#chart-names",children:"\ud5ec\ub984 \ubca0\uc2a4\ud2b8 \ud504\ub799\ud2f0\uc2a4 \ubb38\uc11c"}),"\ub97c \ucc38\uace0\ud558\uc138\uc694."]})}),"\n",(0,t.jsx)(s.h3,{id:"helmchartconfig\ub85c-\ud328\ud0a4\uc9c0-\ucef4\ud3ec\ub10c\ud2b8-\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\ud558\uae30",children:"HelmChartConfig\ub85c \ud328\ud0a4\uc9c0 \ucef4\ud3ec\ub10c\ud2b8 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\ud558\uae30"}),"\n",(0,t.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1",children:"v1.19.1+k3s1"})," \ubd80\ud130 \uc0ac\uc6a9 \uac00\ub2a5"]})}),"\n",(0,t.jsxs)(s.p,{children:["HelmChart\ub85c \ubc30\ud3ec\ub418\ub294 \ud328\ud0a4\uc9c0 \ucef4\ud3ec\ub10c\ud2b8(\uc608\ub85c Traefik)\uc758 \uac12\uc744 \uc7ac\uc815\uc758\ud560 \uc218 \uc788\ub3c4\ub85d, K3s\ub294 HelmChartConfig \ub9ac\uc18c\uc2a4\ub97c \ud1b5\ud574 \ubc30\ud3ec\ub97c \uc0ac\uc6a9\uc790 \uc815\uc758\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4. HelmChartConfig \ub9ac\uc18c\uc2a4\ub294 \ud574\ub2f9 HelmChart\uc758 \uc774\ub984\uacfc \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc640 \uc77c\uce58\ud574\uc57c \ud558\uba70, \ucd94\uac00 \uac12 \ud30c\uc77c\ub85c ",(0,t.jsx)(s.code,{children:"helm"})," \uba85\ub839\uc5d0 \uc804\ub2ec\ub418\ub294 ",(0,t.jsx)(s.code,{children:"valuesContent"}),"\ub97c \ucd94\uac00\ub85c \uc81c\uacf5\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["HelmChart ",(0,t.jsx)(s.code,{children:"spec.set"})," \uac12\uc740 HelmChart \ubc0f HelmChartConfig ",(0,t.jsx)(s.code,{children:"spec.valuesContent"})," \uc124\uc815\uc744 \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4."]})}),"\n",(0,t.jsxs)(s.p,{children:["\uc608\ub97c \ub4e4\uc5b4, \ud328\ud0a4\uc9d5\ub41c \ud2b8\ub798\ud53d \uc778\uadf8\ub808\uc2a4 \uad6c\uc131\uc744 \uc0ac\uc6a9\uc790 \uc815\uc758\ud558\ub824\uba74 ",(0,t.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml"}),"\uc774\ub77c\ub294 \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0 \ub2e4\uc74c \ub0b4\uc6a9\uc73c\ub85c \ucc44\uc6b0\uba74 \ub429\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image:\n      name: traefik\n      tag: v2.8.5\n    forwardedHeaders:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    ssl:\n      enabled: true\n      permanentRedirect: false\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\ud5ec\ub984-\ubc84\uc804-2\uc5d0\uc11c-\ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",children:"\ud5ec\ub984 \ubc84\uc804 2\uc5d0\uc11c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30"}),"\n",(0,t.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,t.jsxs)(s.p,{children:["v1.17.",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.17.0%2Bk3s.1",children:"v1.17.0+k3s.1"}),"\ubd80\ud130 \ud5ec\ub984 v3\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\uc6d0 \ubc0f \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]})}),"\n",(0,t.jsxs)(s.p,{children:["K3s\ub294 \ud5ec\ub984 v2 \ub610\ub294 \ud5ec\ub984 v3\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud5ec\ub984 v3\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub824\ub294 \uacbd\uc6b0, ",(0,t.jsx)(s.a,{href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/",children:"\uc774"})," \ud5ec\ub984 \ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c\uc5d0\uc11c \ud50c\ub7ec\uadf8\uc778\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc131\uacf5\uc801\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ud5ec\ub984 3 \uacf5\uc2dd \ubb38\uc11c ",(0,t.jsx)(s.a,{href:"https://helm.sh/docs/",children:"\uc5ec\uae30"}),"\ub97c \ucc38\uace0\ud558\uc138\uc694. ",(0,t.jsx)(s.a,{href:"/kr/cluster-access",children:"\ud074\ub7ec\uc2a4\ud130 \uc811\uadfc"}),"\uc5d0 \ub300\ud55c \uc139\uc158\uc5d0 \ub530\ub77c kubeconfig\ub97c \uc62c\ubc14\ub974\uac8c \uc124\uc815\ud588\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["\ud5ec\ub984 3\uc5d0\uc11c\ub294 \ub354 \uc774\uc0c1 Tiller\uc640 ",(0,t.jsx)(s.code,{children:"helm init"})," \uba85\ub839\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uc2dd \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc138\uc694."]})})]})}function o(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>c});var t=n(7294);const r={},d=t.createContext(r);function c(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);