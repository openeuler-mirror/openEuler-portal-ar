import ar from './header-ar';

const pathStack = [] as string[];

function setPath(this: { isZh: boolean }, item: any) {
  pathStack.push(item.NAME);
  const res = {
    ...item,
    _PATH: [...pathStack],
  };
  if (Array.isArray(res.CHILDREN)) {
    res.CHILDREN = res.CHILDREN.map(setPath, this);
  }
  if (Array.isArray(res.SHORTCUT)) {
    pathStack.push(ar.QUICKLINK);
    res.SHORTCUT = res.SHORTCUT.map(setPath, this);
    pathStack.pop();
  }
  pathStack.pop();
  return res;
}

ar.NAV_ROUTER = ar.NAV_ROUTER.map(setPath, { isZh: false }) as any[];

export default {
  ar,
};
