import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Node, Edge, ClusterNode } from '@swimlane/ngx-graph';

import { NumberCardItem } from '../dashboard.interface';
import {
  NUMBER_CARD_ITEMS,
  GRAPH_LINKS,
  GRAPH_NODES,
  GRAPH_CLUSTERS
} from '../dashboard.datasource';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {
  zoomToFit$: Subject<boolean> = new Subject()
  numberCards: Array<NumberCardItem> = NUMBER_CARD_ITEMS
  graphLinks: Array<Edge> = GRAPH_LINKS
  graphNodes: Array<Node> = GRAPH_NODES
  graphClusters: Array<ClusterNode> = GRAPH_CLUSTERS
  scheme: string = 'picnic'
  taste: string = 'hotpink'

  constructor() { }

  ngOnInit() {
  }

  fitGraph() {
    this.zoomToFit$.next(true)
  }

}
