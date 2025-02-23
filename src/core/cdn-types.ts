import { meta } from './meta'

/** 热更新使用的更新源 */
export enum CdnTypes {
  /** @deprecated */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  jsDelivr = 'jsDelivr',
  AltCdn = 'AltCdn',
  GitHub = 'GitHub',
}
const defaultOwner = 'the1812'
/** 根据分支名和仓库 owner 检索 CDN 链接 */
export const cdnRoots: Record<CdnTypes, (branch: string, owner?: string) => string> = {
  /** @deprecated */
  jsDelivr: (branch, owner) =>
    `https://cdn.jsdelivr.net/gh/${owner || defaultOwner}/Bilibili-Evolved@${branch}/`,
  AltCdn: (branch, owner) => meta.compilationInfo.altCdn.root(branch, owner),
  GitHub: (branch, owner) =>
    `https://raw.githubusercontent.com/${owner || defaultOwner}/Bilibili-Evolved/${branch}/`,
}
