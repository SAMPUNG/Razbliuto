import { NumberCardItem } from './dashboard.interface';

import { Node, Edge, ClusterNode } from '@swimlane/ngx-graph';

const NUMBER_CARD_ITEMS: Array<NumberCardItem> = [
  {
    "name": "Germany",
    "value": 40632,
    "extra": {
      "code": "de"
    }
  },
  {
    "name": "United States",
    "value": 50000,
    "extra": {
      "code": "us"
    }
  },
  {
    "name": "France",
    "value": 36745,
    "extra": {
      "code": "fr"
    }
  },
  {
    "name": "United Kingdom",
    "value": 36240,
    "extra": {
      "code": "uk"
    }
  },
  {
    "name": "Spain",
    "value": 33000,
    "extra": {
      "code": "es"
    }
  },
  {
    "name": "Italy",
    "value": 35800,
    "extra": {
      "code": "it"
    }
  }
]

const GRAPH_LINKS: Array<Edge> = [
  {
    id: 'a',
    source: 'first',
    target: 'second',
    label: 'is parent of'
  }, {
    id: 'b',
    source: 'first',
    target: 'c1',
    label: 'custom label'
  }, {
    id: 'd',
    source: 'first',
    target: 'c2',
    label: 'custom label'
  }, {
    id: 'e',
    source: 'c1',
    target: 'd',
    label: 'first link'
  }, {
    id: 'f',
    source: 'c1',
    target: 'd',
    label: 'second link'
  }
]

const GRAPH_NODES: Array<Node> = [
  {
    id: 'first',
    label: 'A'
  }, {
    id: 'second',
    label: 'B'
  }, {
    id: 'c1',
    label: 'C1'
  }, {
    id: 'c2',
    label: 'C2'
  }, {
    id: 'd',
    label: 'D'
  }
]

const GRAPH_CLUSTERS: Array<ClusterNode> = [
  {
    id: 'third',
    label: 'Cluster node',
    childNodeIds: ['c1', 'c2']
  }
]

export {
  NUMBER_CARD_ITEMS,
  GRAPH_LINKS,
  GRAPH_NODES,
  GRAPH_CLUSTERS
}
