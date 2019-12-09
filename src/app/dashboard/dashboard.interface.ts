interface NumberCardItem {
  name: string
  value: number
  extra: {
    code: string
  }
}

interface GraphLink {
  id: string
  source: string
  target: string
  label: string
}

interface GraphNode {
  id: string
  label: string
}

interface GraphCluster {
  id: string
  label: string
  childNodeIds: Array<string>
}

export {
  NumberCardItem,
  GraphLink,
  GraphNode,
  GraphCluster
}
