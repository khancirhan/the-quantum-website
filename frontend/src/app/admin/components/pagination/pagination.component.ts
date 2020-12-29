import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() totalRecords = 0;
  @Input() recordsPerPage = 10;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  pages: number[] = [];
  currentPage: number = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const pageCount = this.getPageCount();
    this.pages = this.getPages(pageCount);
  }

  showPagination(): boolean {
    return this.pages.length > 1;
  }

  getPageCount(): number {
    return Math.ceil(this.totalRecords / this.recordsPerPage);
  }

  getPages(pageCount: number): number[] {
    const pageArray = [];

    if (pageCount > 0) {
      for (let i = 1; i <= pageCount; i++) {
        pageArray.push(i);
      }
    }

    return pageArray;
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {
      this.currentPage = pageNumber;

      this.onPageChange.emit(this.currentPage);
    }
  }
}
