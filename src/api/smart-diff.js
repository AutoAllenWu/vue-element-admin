import request from '@/utils/diff-request'

export function getAllTasks(query) {
  return request({
    url: '/api/task/get_all_task',
    method: 'get',
    params: query
  })
}
