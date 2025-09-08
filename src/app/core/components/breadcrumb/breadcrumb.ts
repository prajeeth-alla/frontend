import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Breadcrumb } from '../../models/app.model';
import { TitleCasePipe } from '../../pipes/title-case/title-case-pipe';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class BreadcrumbComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  breadcrumbs: Breadcrumb[] = [];

  ngOnInit(): void {
    this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
    });
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const children = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      let label = child.snapshot.data['breadcrumb'];
      if (!label) {
        label = routeURL;
      }

      if (label) {
        breadcrumbs.push({ label, url });
      }

      // Recursively process all children
      this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
